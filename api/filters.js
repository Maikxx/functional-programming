/**
* @typedef {Object[]} Books
* @property {String} Books[].frablId
* @property {String} Books[].title
* @property {Number} Books[].yearOfPublication
* @property {String} Books[].language
* @property {String} Books[].genre
*/

/**
* Function that filters the query results books that are newer than
* the current year minus the defined book age.
*
* @param {Books} books
* @param {String} language
*
* @returns {Books}
*/
const filterBooksByLanguage = (books, language) => {
    return books.filter(transformedResult => language === transformedResult.language)
}

/**
* Function that filters the query books by a given year.
*
* @param {Books} books
*
* @returns {Books}
*/
const filterBooksByYear = (books, year) => {
    return books.filter(book => book.yearOfPublication === year)
}

module.exports = {
    filterBooksByLanguage,
    filterBooksByYear,
}