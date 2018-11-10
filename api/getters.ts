import { Book, AmountOfBooksPerYear } from "./types/Book"
import { D3Data } from "./types/D3Data"

const _range = require('lodash.range')
const filters = require('./filters.ts')

const getFrablIdFromResult = (result?: any): string => {
    return result.frabl
        && result.frabl.$t
        || undefined
}

const getShortTitleFromResult = (result?: any): string => {
    return result.titles
        && result.titles[`short-title`]
        && result.titles[`short-title`].$t
        || undefined
}

const getYearOfPublicationFromResult = (result?: any): number => {
    return result.publication
        && result.publication.year
        && result.publication.year.$t
        && Number(result.publication.year.$t)
        || undefined
}

const getLanguageFromResult = (result?: any): string => {
    return result.languages
        && result.languages.language
        && result.languages.language.$t
        || undefined
}

const getGenreFromResult = (result?: any): string => {
    return result.genres
        && result.genres.genre
        && result.genres.genre.$t
        || undefined
}

const getBooksFromResults = (results?: any[]): Book[] => {
    return results && results.map(result => ({
        frablId: getFrablIdFromResult(result),
        title: getShortTitleFromResult(result),
        yearOfPublication: getYearOfPublicationFromResult(result),
        language: getLanguageFromResult(result),
        genre: getGenreFromResult(result),
    }))
}

const getBooksByLanguageFromBooks = (books: Book[], language: string): Book[] => {
    return books
        ? filters.filterBooksByLanguage(books, language)
        : []
}

const getAmountOfBooksPerYear = (books: Book[], year: number, language: string): AmountOfBooksPerYear => {
    const key = `${language}-${year}`
    const amountOfBooks = filters.filterBooksByYear(books, year).length

    return {
        [key]: amountOfBooks
    }
}

const getBooksByYear = (books: Book[], language: string) => {
    const currentYear = new Date().getFullYear()
    const publicationYears = _range(currentYear - 15, currentYear + 1)

    return publicationYears.map(year => getAmountOfBooksPerYear(books, year, language))
}

const getTransformedDataPointByLanguage = (books: Book[], language: string): D3Data[] => {
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

const getD3Data = (dutchBooks: Book[], englishBooks: Book[]): D3Data[] => {
    const transformedDutchData = getTransformedDataPointByLanguage(dutchBooks, 'dut')
    const transformedEnglishData = getTransformedDataPointByLanguage(englishBooks, 'eng')

    return [...transformedDutchData, ...transformedEnglishData]
}

module.exports = {
    getBooksFromResults,
    getBooksByLanguageFromBooks,
    getYearOfPublicationFromResult,
    getD3Data,
}