const getters = require('./getters.js')

/**
* Function that filters the query results books that are newer than
* the current year minus the defined book age.
*
* @param {Object[]} books
* @param {String} books[].frabId
* @param {String} books[].title
* @param {Number} books[].yearOfPublication
* @param {String} books[].language
* @param {String} books[].genre
*
* @param {String} language
*
* @returns {Object[]}
*/
const filterBooksByLanguage = (books, language) => {
    return books.filter(transformedResult => (
        language === transformedResult.language
    ))
}

/**
* Function that filters the query books by a given year.
*
* @param {Object[]} books
* @param {String} books[].frabId
* @param {String} books[].title
* @param {Number} books[].yearOfPublication
* @param {String} books[].language
* @param {String} books[].genre
* @param {Number} year
*
* @returns {Object[]}
*/
const filterBooksByYear = (books, year) => {
    return books.filter(book => book.yearOfPublication === year)
}

module.exports = {
    filterBooksByLanguage,
    filterBooksByYear,
}