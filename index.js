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
        count: 200,
        filter: result => {
            const publicationYear = getters.getYearOfPublicationFromResult(result)

            return publicationYear >= new Date().getFullYear() - 5
        }
    })
}

(async () => {
    try {
        const dutchResults = await search('language:dut', ['type(book)'])
        const transformedDutchResults = dutchResults && getters.getTransformedResultsFromResults(dutchResults)
        const dutchBooks = transformedDutchResults && getters.getBooksByLanguageFromTransformedResults(transformedDutchResults, 'dut')

        const englishResults = await search('language:eng', ['type(book)'])
        const transformedEnglishResults = englishResults && getters.getTransformedResultsFromResults(englishResults)
        const englishBooks = transformedDutchResults && getters.getBooksByLanguageFromTransformedResults(transformedEnglishResults, 'eng')

        const sortedEnglishAndDutchBooks = getters.getSortedEnglishAndDutchBooks(dutchBooks, englishBooks)

        if (sortedEnglishAndDutchBooks) {
            app.get('/', (req, res) => res.json(sortedEnglishAndDutchBooks))
            app.listen(port, () => console.log(`\nAvailable on: localhost:${port}`))
            fs.writeFile('data.json', JSON.stringify(sortedEnglishAndDutchBooks))
        }
    } catch (error) {
        console.error(error)
        fs.writeFile('search.error.json', error)
    }
})()
