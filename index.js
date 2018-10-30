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

const details = async (id, librarian) => {
    return await client.get('details', {
        id,
        librarian,
    })
}

const startup = async () => {
    try {
        const searchData = await search('held', 'title', true)

        if (searchData) {
            console.log(searchData)
            fs.writeFile('search.json', searchData)
        }
    } catch (error) {
        console.error(error)
        fs.writeFile('search.error.json', error)
    }

    try {
        const detailsData = await details('128970', true)

        if (detailsData) {
            console.log(detailsData)
            fs.writeFile('details.json', detailsData)
        }
    } catch (error) {
        console.error(error)
        fs.writeFile('details.error.json', error)
    }
}

startup()