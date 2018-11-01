// Immediately load the dotenv file if the environment is not production.
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load()
}

const fs = require('fs')
const api = require('./oba-api.js')
const express = require('express')
const app = express()
const port = 3000

const client = new api({
    url: 'https://zoeken.oba.nl/api/v1/',
    key: process.env.PUBLIC
})

const search = async (query) => {
    return await client.get('search', {
        q: query,
        librarian: true,
        refine: true,
        facet: 'type(book)&facet=language(dut)'
    }, 'title')
}

// const details = async (frabl, librarian) => {
//     return await client.get('details', {
//         frabl,
//         librarian,
//     })
// }

// const availability = async (frabl) => {
//     return await client.get('availability', {
//         frabl,
//     })
// }

// const getDetailsForResult = async result => {
//     const { frabl } = result
//     const { $t: frablId } = frabl || {}

//     const detailsData = await details(frablId, true)

//     if (detailsData) {
//         return JSON.parse(detailsData)
//     }
// }

// const getAvailabilityForResult = async result => {
//     const { frabl } = result
//     const { $t: frablId } = frabl || {}

//     const availabilityData = await availability(frablId)

//     if (availabilityData) {
//         const parsedData = await JSON.parse(availabilityData)
//         const meta = parsedData.aquabrowser && parsedData.aquabrowser.meta
//         const records = meta && meta.records

//         return records
//     }
// }

(async () => {
    try {
        const searchData = await search('pony')

        if (searchData) {
            console.log(searchData.data.length)
            // const results = searchData.aquabrowser
            //     && searchData.aquabrowser.results
            //     && searchData.aquabrowser.results.result
            //     || []

            app.get('/', (req, res) => res.json(searchData))
            app.listen(port, () => console.log('Available'))

            // results.map(async result => {
            //     const detailsForResult = await getDetailsForResult(result)

            //     // const availabilityForResult = getAvailabilityForResult(result)
            // })
        }
    } catch (error) {
        console.error(error)
        fs.writeFile('search.error.json', error)
    }
})()