export type Query = string
export type Facet = string[]

export interface ResultId {
    nativeid?: string
    ds?: string
    translation?: string
    'search-method'?: string
    'search-term'?: string
    'search-type'?: string
    $t?: string
}

export interface ResultFrabl {
    translation?: string
    'search-method'?: string
    'search-term'?: string
    'search-type'?: string
    $t?: string
}

export interface ResultCoverImages {
    coverimage?: ResultCoverImage[]
}

export interface ResultCoverImage {
    translation?: string
    $t?: string
}

export interface ResultTitles {
    title?: ResultTitlesTitle
    'short-title'?: ResultTitlesShortTitle
}

export interface ResultTitlesTitle {
    translation?: string
    'search-method'?: string
    'search-term'?: string
    'search-type'?: string
    $t?: string
}

export interface ResultTitlesShortTitle {
    translation?: string
    $t?: string
}

export interface ResultAuthors {
    'main-author'?: {
        'search-method'?: string
        'search-term'?: string
        'search-type'?: string
        translation?: string
        firstname?: string
        preposition?: string
        lastname?: string
        creatortype?: string
        main?: string
        $t?: string
    }
    author?: {
        'search-method'?: string
        'search-term'?: string
        'search-type'?: string
        translation?: string
        creatortype?: string
        $t?: string
    }
}

export interface ResultFormats {
    format?: {
        translation?: string
        'search-method'?: string
        'search-term'?: string
        'search-type'?: string
        $t?: string
    }
}

export interface ResultIdentifiers {
    'isbn-id': ResultIdentifiersId
    'ppn-id': ResultIdentifiersId
}

export interface ResultIdentifiersId {
    'search-method'?: string
    'search-term'?: string
    'search-type'?: string
    translation?: string
    $t?: string
}

export interface ResultPublication {
    year?: ResultPublicationYear
    publishers?: ResultPublicationPublishers
    editions?: ResultPublicationEditions
}

export interface ResultPublicationYear {
    year?: {
        translation?: string
        'search-method'?: string
        'search-term'?: string
        'search-type'?: string
        $t?: string
    }
}

export interface ResultPublicationPublishers {
    publisher?: {
        translation?: string
        'search-method'?: string
        'search-term'?: string
        'search-type'?: string
        year?: string
        place?: string
        $t?: string
    }
}

export interface ResultPublicationEditions {
    edition?: {
        translation?: string
        $t?: string
    }
}

export interface ResultLanguages {
    language?: {
        translation?: string
        'search-method'?: string
        'search-term'?: string
        'search-type'?: string
        $t?: string
    }
}

export interface ResultSubjects {
    'topical-subject'?: ResultTopicalSubject[]
}

export interface ResultTopicalSubject {
    translation?: string
    'search-method'?: string
    'search-term'?: string
    'search-type'?: string
    $t?: string
}

export interface ResultDescription {
    'physical-description'?: {
        translation?: string
        $t?: string
    }
}

export interface ResultSummaries {
    summary?: {
        translation?: string
        $t?: string
    }
}

export interface ResultNotes {
    note?: ResultNote[]
}

export interface ResultNote {
    translation?: string
    $t?: string
}

export interface ResultTargetAudiences {
    'target-audience'?: {
        translation?: string
        'search-method'?: string
        'search-term'?: string
        'search-type'?: string
        $t?: string
    }
}

export interface ResultSeries {
    'series-title'?: {
        translation?: string
        'search-method'?: string
        'search-term'?: string
        'search-type'?: string
        $t?: string
    }
}

export interface ResultUndupInfo {
    key?: string
    cnt?: string
    sort?: string
    frabl?: string
    'frabl-global'?: string
    'frabl-key1'?: string
    'frabl-key2'?: string
    translation?: string
    format?: {
        text?: string
        icon?: string
        translation?: string
        item?: ResultUndupInfoFormatItem[]
    }[]
}

export interface ResultUndupInfoFormatItem {
    extid?: string
    frabl?: string
    language?: string
    year?: string
    publisher?: string
    globalholdingscount?: string
}

export interface ResultLibrarianInfoRecord {
    marc?: {
        src?: string
        df010?: {
            $t?: string
            df010?: ResultLibrarianInfoRecordMarcD
        }
        df020?: {
            $t?: string
            df020?: ResultLibrarianInfoRecordMarcD
        }
        df059?: {
            $t?: string
            df059?: ResultLibrarianInfoRecordMarcD
        }
        df101?: {
            $t?: string
            df101?: ResultLibrarianInfoRecordMarcD
        }
        df200?: {
            $t?: string
            df200?: ResultLibrarianInfoRecordMarcD[]
        }
        df210?: {
            $t?: string
            df210?: ResultLibrarianInfoRecordMarcD[]
        }
        df215?: {
            $t?: string
            df215?: ResultLibrarianInfoRecordMarcD[]
        }
        df700?: {
            $t?: string
            df700?: ResultLibrarianInfoRecordMarcD[]
        }
        df630?: {
            $t?: string
            df630?: ResultLibrarianInfoRecordMarcD
        }[]
        df014?: {
            $t?: string
            df014?: ResultLibrarianInfoRecordMarcD
        }
        df044?: {
            $t?: string
            df044?: ResultLibrarianInfoRecordMarcD
        }[]
        df205?: {
            $t?: string
            df205?: ResultLibrarianInfoRecordMarcD
        }
        df320?: {
            $t?: string
            df320?: ResultLibrarianInfoRecordMarcD
        }
    }
    meta?: string
    'undup-info'?: ResultUndupInfo
}

export interface ResultLibrarianInfoInfo {
    'import-time'?: string
    material?: string
    language?: string
    debug?: string
}

export interface ResultLibrarianInfoRecordMarcD {
    key?: string
    $t?: string
}

export interface ResultLibrarianInfo {
    translation?: string
    info?: ResultLibrarianInfoInfo
    record?: ResultLibrarianInfoRecord
}

export interface Result {
    id?: ResultId
    frabl?: ResultFrabl
    'detail-page'?: string
    coverimages?: ResultCoverImages
    titles?: ResultTitles
    authors?: ResultAuthors
    formats?: ResultFormats
    identifiers?: ResultIdentifiers
    publication?: ResultPublication
    languages?: ResultLanguages
    subjects?: ResultSubjects
    description?: ResultDescription
    summaries?: ResultSummaries
    notes?: ResultNotes
    'target-audiences'?: ResultTargetAudiences
    series?: ResultSeries
    'librarian-info'?: ResultLibrarianInfo
    'undup-info'?: ResultUndupInfo
}
