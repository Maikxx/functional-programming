// Immediately load the dotenv file if the environment is not production.
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load()
}

const fs = require('fs')
const API = require('./api/oba-wrapper.js')

// Server
const express = require('express')
const app = express()
const port = 3000

// Getters
const getters = require('./api/getters.js')

// API
const client = new API({
    public: process.env.PUBLIC,
    secret: process.env.SECRET,
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
        count: 29,
    })
}

(async () => {
    try {
        const results = await search('james bond', ['type(book)'])

        if (results) {
            const transformedResults = getters.getTransformedResultsFromResults(results)
            const englishAndDutchBooks = getters.getEnglishAndDutchBooks(transformedResults)
            const sortedEnglishAndDutchBooks = getters.getSortedEnglishAndDutchBooks(englishAndDutchBooks)

            app.get('/', (req, res) => res.json(sortedEnglishAndDutchBooks))
            app.listen(port, () => console.log(`\nAvailable on: localhost:${port}`))
        }
    } catch (error) {
        console.error(error)
        fs.writeFile('search.error.json', error)
    }
})()
