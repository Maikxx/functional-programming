const API = require('node-oba-api-wrapper')
const getters = require('./getters.js')

// API
const client = new API({
    public: process.env.PUBLIC,
    secret: process.env.SECRET,
})

/**
* Function that searches the OBA api with the help of a query search string and a facet
* Librarian and refine are both set to true.
*
* @param {String} query
* @param {String} facet
*
* @returns {Promise<Object[]>}
*/
const search = async (query, facet) => {
    const maxBookAge = process.env.MAX_BOOK_AGE

    return await client.get('search', {
        q: query,
        librarian: true,
        refine: true,
        facet,
        count: 500,
        filter: result => {
            const publicationYear = getters.getYearOfPublicationFromResult(result)
            const currentYear = new Date().getFullYear()

            return publicationYear >= currentYear - maxBookAge
        }
    })
}

/**
* Function that queries the OBA API for books based on a given language.
*
* @param {String} language
*
* @returns {Promise<Object[]>}
*/
const queryBooksByLanguage = async (language) => {
    const results = await search(`language:${language}`, ['type(book)'])
    const transformedBooks = results && getters.getBooksFromResults(results)
    return transformedBooks && getters.getBooksByLanguageFromBooks(transformedBooks, language)
}

module.exports = {
    queryBooksByLanguage,
}