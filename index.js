// Immediately load the dotenv file if the environment is not production.
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load()
}

const fs = require('fs')
const queryString = require('query-string')
const parser = require('xml2json')
const axios = require('axios')

class OBA {
    constructor(options) {
        this.publicKey = options.public
        this.secretKey = options.secret
    }

    get(endpoint, params) {
        const baseUrl = 'http://obaliquid.staging.aquabrowser.nl/api/v1/'
        const path = endpoint + '/'

        return new Promise(async (resolve, reject) => {
            const sortedQuery = queryString.stringify(params)

            try {
                const res = await axios.get(baseUrl + path + '/?authorization=' + this.publicKey + '&' + sortedQuery)
                const data = await res && res.data
                const xml = await parser.toJson(data)
                resolve(xml)
            } catch (error) {
                reject(error)
            }
        })
    }
}

const client = new OBA({
    public: process.env.publicKey,
    secret: process.env.secretKey,
})

const search = async (query, sortDir, librarian) => {
    return await client.get('search', {
        q: query,
        sort: sortDir,
        librarian,
    })
}

const details = async (frabl, librarian) => {
    return await client.get('details', {
        frabl,
        librarian,
    })
}

const availability = async (frabl) => {
    return await client.get('availability', {
        frabl,
    })
}

const getDetailsForResult = async result => {
    const { frabl } = result
    const { $t: frablId } = frabl || {}

    const detailsData = await details(frablId, true)

    if (detailsData) {
        console.log('Details', JSON.parse(detailsData))
    }
}

const getAvailabilityForResult = async result => {
    const { frabl } = result
    const { $t: frablId } = frabl || {}

    const availabilityData = await availability(frablId)

    if (availabilityData) {
        console.log('Availability', JSON.parse(availabilityData))
    }
}

(async () => {
    try {
        const searchData = await search('weer', 'title', true)

        if (searchData) {
            const parsedData = await JSON.parse(searchData)
            const results = parsedData.aquabrowser
                && parsedData.aquabrowser.results
                && parsedData.aquabrowser.results.result
                || []

            results.map(result => {
                getDetailsForResult(result)
                getAvailabilityForResult(result)
            })
        }
    } catch (error) {
        console.error(error)
        fs.writeFile('search.error.json', error)
    }
})()