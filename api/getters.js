const _range = require('lodash.range')
const _uniqBy = require('lodash.uniqby')

/**
* Function that searches the result object for the frabl id, which can be used to query a detail page.
*
* @param {Object} result
* @returns {String}
*/
const getFrablIdFromResult = result => {
    return result.frabl
        && result.frabl.$t
        || undefined
}

/**
* Function that searches the result object for the short title.
*
* @param {Object} result
* @returns {String}
*/
const getShortTitleFromResult = result => {
    return result.titles
        && result.titles[`short-title`]
        && result.titles[`short-title`].$t
        || undefined
}

/**
* Function that searches the result object for the publication year and transforms it to a number.
*
* @param {Object} result
* @returns {Number}
*/
const getYearOfPublicationFromResult = result => {
    return result.publication
        && result.publication.year
        && result.publication.year.$t
        && Number(result.publication.year.$t)
        || undefined
}

/**
* Function that searches the result object for the languages and transforms it to an array of strings.
*
* @param {Object} result
* @returns {Array} Array of languages.
*/
const getLanguageFromResult = result => {
    return result.languages
        && result.languages.language
        && result.languages.language.$t
        || undefined
}

/**
* Function that searches the result object for the genre and transforms it to an array of strings.
*
* @param {Object} result
* @returns {Array}
*/
const getGenreFromResult = result => {
    return result.genres
        && result.genres.genre
        && result.genres.genre.$t
        || undefined
}

/**
* Function that loops through the results and gives back a new format.
*
* @param {Object} results
* @returns {Array}
*/
const getTransformedResultsFromResults = results => {
    return results && results.map(result => ({
        frablId: getFrablIdFromResult(result),
        title: getShortTitleFromResult(result),
        yearOfPublication: getYearOfPublicationFromResult(result),
        language: getLanguageFromResult(result),
        genre: getGenreFromResult(result),
    }))
}

/**
* Function that loops through the transformed results and gives back the English or Dutch books.
*
* @param {Object} transformedResults
* @returns {Array}
*/
const getBooksByLanguageFromTransformedResults = (transformedResults, language) => {
    return transformedResults
        ? transformedResults.filter(transformedResult => language === transformedResult.language)
        : []
}

/**
* Function that filters through the books and gives back the amount of books for that given year.
*
* @param {Object} books
* @param {Number} year
* @param {String} language
* @returns {Number}
*/
const getAmountOfBooksPerYear = (books, year, language) => ({
    [`${language}-${year}`]: books.filter(book => book.yearOfPublication === year).length
})

/**
* Function that loops through an array of years and find the books belonging to that year.
*
* @param {Array} books
* @returns {Object}
*/
const getBooksByYear = (books, language) => {
    const currentYear = new Date().getFullYear()
    const publicationYears = _range(currentYear - 5, currentYear + 1)

    return publicationYears.map(year => getAmountOfBooksPerYear(books, year, language))
}

/**
* Function that gives back all the required information for D3.
*
* @param {Array} books
* @param {String} language
* @returns {Array}
*/
const getTransformedDataPointByLanguage = (books, language) => {
    return getBooksByYear(books, language).map(yearBook => {
        const languageYearKey = Object.keys(yearBook)[0]
        const languageKeyMap = languageYearKey.split('-')
        const language = languageKeyMap[0]
        const year = Number(languageKeyMap[1])
        const count = yearBook[languageYearKey]

        return {
            series: language,
            date: new Date(year, 1, 1),
            count,
        }
    })
}

module.exports = {
    getTransformedResultsFromResults,
    getBooksByLanguageFromTransformedResults,
    getYearOfPublicationFromResult,
    getTransformedDataPointByLanguage,
}