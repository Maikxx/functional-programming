export interface Book {
    frablId?: string
    title?: string
    yearOfPublication?: number
    language?: string
    genre?: string
}

export interface AmountOfBooksPerYear {
    [key: string]: number
}