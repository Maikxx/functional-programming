/**
* Function that searches the data given by the OBA api and returns the meta information about the query.
*
* @param {object} searchData
* @returns {object} Object containing meta information.
*/
const getMetaFromSearchData = searchData => {
    return searchData.aquabrowser && searchData.aquabrowser.meta
}

/**
* Function that searches the data given by the OBA api and returns the total amount of results found by the query.
*
* @param {object} meta
* @returns {number} Number of the total amount of books.
*/
const getTotalAmountOfResultsFromMeta = meta => {
    return meta
        ? meta[0]
            && meta[0].count
            && meta[0].count[0]
            && Number(meta[0].count[0])
        : undefined
}

/**
* Function that searches the meta data given by the getMetaFromSearchData function and looks for the page number.
*
* @param {object} meta
* @returns {number} Number of the page.
*/
const getCurrentPageFromMeta = meta => {
    return meta
        ? meta[0]
            && meta[0].page
            && meta[0].page[0]
            && Number(meta[0].page[0])
        : undefined
}

/**
* Function that searches searchData from the OBA api for the results.
*
* @param {object} searchData
* @returns {Array} Array of results or an empty array.
*/
const getResultsFromSearchData = searchData => {
    return searchData.aquabrowser
        && searchData.aquabrowser.results
        && searchData.aquabrowser.results[0]
        && searchData.aquabrowser.results[0].result
        || []
}

/**
* Function that searches the result object for the frabl id, which can be used to query a detail page.
*
* @param {object} result
* @returns {string} A string which contains the frablId.
*/
const getFrablIdFromResult = result => {
    return result.frabl
        && result.frabl[0]
        && result.frabl[0]._
        || undefined
}

/**
* Function that searches the result object for the regular title.
*
* @param {object} result
* @returns {string} A string which contains the title of the book.
*/
const getRegularTitleFromResult = result => {
    return result.titles
        && result.titles[0]
        && result.titles[0].title
        && result.titles[0].title[0]
        && result.titles[0].title[0]._
        || undefined
}

/**
* Function that searches the result object for the short title.
*
* @param {object} result
* @returns {string} A string which contains the short title of the book.
*/
const getShortTitleFromResult = result => {
    return result.titles
        && result.titles[0]
        && result.titles[0][`short-title`]
        && result.titles[0][`short-title`][0]
        && result.titles[0][`short-title`][0]._
        || undefined
}

/**
* Function that searches the result object for the publication year and transforms it to a number.
*
* @param {object} result
* @returns {number} Year in which the book is published.
*/
const getYearOfPublicationFromResult = result => {
    return result.publication
        && result.publication[0]
        && result.publication[0].year
        && result.publication[0].year[0]
        && result.publication[0].year[0]._
        && Number(result.publication[0].year[0]._)
        || undefined
}

/**
* Function that searches the result object for the languages and transforms it to an array of strings.
*
* @param {object} result
* @returns {Array} Array of languages.
*/
const getLanguagesFromResult = result => {
    return result.languages
        && result.languages.map(resultLanguage => (
            resultLanguage.language
                && resultLanguage.language[0]
                && resultLanguage.language[0]._
                || undefined
        ))
}

/**
* Function that searches the result object for the genres and transforms it to an array of strings.
*
* @param {object} result
* @returns {Array} Array of genres.
*/
const getGenresFromResult = result => {
    return result.genres
        && result.genres.map(resultGenre => (
            resultGenre.genre
                && resultGenre.genre[0]
                && resultGenre.genre[0]._
                || undefined
        ))
}

/**
* Function that loops through the results and gives back a new format.
*
* @param {object} results
* @returns {Array} Array of transformed results or an empty array.
*/
const getTransformedResultsFromResults = results => {
    return results && results.map(result => {
        return {
            frablId: getFrablIdFromResult(result),
            titleCollection: {
                regular: getRegularTitleFromResult(result),
                short: getShortTitleFromResult(result),
            },
            yearOfPublication: getYearOfPublicationFromResult(result),
            languages: getLanguagesFromResult(result),
            genres: getGenresFromResult(result),
        }
    })
}

module.exports = {
    getMetaFromSearchData,
    getTotalAmountOfResultsFromMeta,
    getCurrentPageFromMeta,
    getResultsFromSearchData,
    getTransformedResultsFromResults,
}