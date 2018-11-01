// Immediately load the dotenv file if the environment is not production.
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load()
}

const fs = require('fs')
const API = require('./api/oba-api.js')

// Server
const express = require('express')
const app = express()
const port = 3000

// Getters
const getters = require('./api/getters.js')

// API
const client = new API({
    url: 'https://zoeken.oba.nl/api/v1/',
    key: process.env.PUBLIC
})


/**
* Function that searches the OBA api with the help of a query search string and a facet
* Librarian and refine are both set to true.
*
* @param {string} query
* @param {string} facet
*/
const search = async (query, facet) => {
    return await client.get('search', {
        q: query,
        librarian: true,
        refine: true,
        facet,
    })
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
        const { data: searchData } = await search('pony', 'type(book)&facet=language(dut)')

        if (searchData) {
            const meta = getters.getMetaFromSearchData(searchData)
            const totalAmountOfResults = getters.getTotalAmountOfResultsFromMeta(meta)
            const currentPage = getters.getCurrentPageFromMeta(meta)
            const results = getters.getResultsFromSearchData(searchData)
            const transformedResults = getters.getTransformedResultsFromResults(results)

            // console.log('currentPage:', currentPage)
            // console.log('totalAmountOfResults:', totalAmountOfResults)
            // console.log('results:', results)
            console.log('transformedResults:', transformedResults)

            app.get('/', (req, res) => res.json(searchData))
            app.listen(port, () => console.log(`\nAvailable on: localhost:${port}`))
        }
    } catch (error) {
        console.error(error)
        fs.writeFile('search.error.json', error)
    }
})()