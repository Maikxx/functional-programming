// Immediately load the dotenv file if the environment is not production.
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load()
}

const fs = require('fs')
const API = require('node-oba-api-wrapper')

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
            const currentYear = new Date().getFullYear()

            return publicationYear >= currentYear - 5
        }
    })
}

(async () => {
    try {
        // Dutch
        const dutchResults = await search('language:dut', ['type(book)'])
        const transformedDutchResults = dutchResults && getters.getTransformedResultsFromResults(dutchResults)
        const dutchBooks = transformedDutchResults && getters.getBooksByLanguageFromTransformedResults(transformedDutchResults, 'dut')

        // English
        const englishResults = await search('language:eng', ['type(book)'])
        const transformedEnglishResults = englishResults && getters.getTransformedResultsFromResults(englishResults)
        const englishBooks = transformedDutchResults && getters.getBooksByLanguageFromTransformedResults(transformedEnglishResults, 'eng')

        // Transformed for D3
        const transformedDutchData = getters.getTransformedDataPointByLanguage(dutchBooks, 'dut')
        const transformedEnglishData = getters.getTransformedDataPointByLanguage(englishBooks, 'eng')
        const transformedD3Data = [...transformedDutchData, ...transformedEnglishData]

        if (transformedD3Data) {
            app.get('/', (req, res) => res.json(transformedD3Data))
            app.listen(port, () => console.log(`\nAvailable on: localhost:${port}`))
            fs.writeFile('data.json', JSON.stringify(transformedD3Data))
        }
    } catch (error) {
        console.error(error)
        fs.writeFile('search.error.json', error)
    }
})()
