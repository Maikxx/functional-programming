# Functional Programming

## Process

### Week 1

#### Day 1

Today we got the assignment explained by an employee of the OBA.
We got an API endpoint, which we will need to fetch data from and show the user an interesting story with it.

After getting the assignment we got a bootcamp of Titus, which showed a lot of functional programming ins-and-outs I already knew, however some things, like `String.prototype.endsWith()`, I had never heard of before.

The rest of the time we tried to get the API to work with JavaScript ([Node](https://nodejs.org/en/)). Here we already pretty much hit a wall, knowing that the API is really bad and outdated.

#### Day 2

Today I started thinking of questions, which I could answer by looking at the data I could gather.
I have thought of the following questions:

1. How has the amount of different book genres published, in the past 5 years, changed?
2. How has the amount of books that are rented out changed in the past 5 years?
3. How has the amount of (cover) images on books changed in the past 5 years?
4. What is the relationship between title and description length of books?
5. How has the division between Dutch and English books at the OBA changed in the past 5 years?
6. How has the average age of authors changed in the children-book genre in the past 5 years?
7. How does the amount of published books per year correlate with the amount of cover images in books?
8. How does the amount of published books per year correlate with average title and description length in books?
9. How does the amount of English speaking expats in Amsterdam correlate with the the amount of English books published?

As for the rest of the day I mainly focussed on getting the _details_ and _availability_ route to work and show me data. I tried to split the code up in readable chunks as much as possible.

#### Day 3

1. How has the amount of different book genres published, in the past 5 years, changed?
    * What major book genres were published?
    * What major book genres became more popular?
    * What major book genres became less popular?
    * What are monumental increases and decreases?
    * How could these increases and decreases best be explained?
2. How has the amount of books that are rented out changed in the past 5 years?
    * How much books were rented out per year from the OBA?
    * How does this growth or decline in rented books compare to state in which books are in?
    * What are monumental increases and decreases?
    * How could these increases and decreases best be explained?
3. How has the amount of (cover) images on books changed in the past 5 years?
    * What is the average amount of cover images on books in a given year?
    * What are monumental increases and decreases?
    * How could these increases and decreases best be explained?
4. What is the relationship between title and description length of books?
    * What is the average title length for each year?
    * What is the average description length for each year?
    * How do these two variables relate?
    * What are monumental increases and decreases in title and / or description length?
    * How could these increases and decreases best be explained?
5. How has the division between Dutch and English study-books at the OBA changed in the past 5 years?
    * What is the amount of books in a given language per year?
    * Has this division increased or decreased?
    * What are monumental increases and decreases?
    * How could these increases and decreases best be explained?
    * _If available_: Does the increase or decrease have something to do with the increased amount of English   speaking people in Amsterdam?
    * Is this increase or decrease truthy for all books, not just for study-books?
6. How has the average age of authors in the children-book genre changed in the past 5 years?
    * What is the average age of authors of books in the children-book genre?
    * What are monumental increases and decreases?
    * How could these increases and decreases best be explained?
7. How does the amount of published books per year correlate with the amount of cover images in books?
    * How has the amount of cover images in books changed in the past 5 years?
    * How has the amount of published books changed in the past 5 years?
    * Is there an influence of the amount of cover images on books and the amount of books that are published?
8. How does the amount of published books per year correlate with average title and description length in books?
    * How has the length of titles and descriptions changed in the past 5 years?
    * How has the amount of published books changed in the past 5 years?
    * Is there an influence of the title/description length  onbooks and the amount of books that are published?
9. How does the amount of English speaking expats in Amsterdam correlate with the the amount of English books published?
    * How much English speaking expats are there in Amsterdam per year?
    * How has the amount of English books at the OBA changed in the past 5 years?

#### Day 4

**Research question**
* How has the division between Dutch and English study-books at the OBA changed in the past 5 years?

**Research sub-questions**
* What is the amount of books in a given language per year?
* Has this division increased or decreased?
* What years have monumental increases and decreases?
* How could these increases and decreases best be explained?
* _If available_: Does the increase or decrease have something to do with the increased amount of English speaking people in Amsterdam?
* Is this increase or decrease truthy for all books, not just for study-books?

**Variables required**
* Language of a book
* Date of publication
* Genre of a book
* _If available_: nationality of the renter

#### Day 5

##### TODO

* Create a way to loop a the search request to get more than 20 results.
* Check if all needed variables are working as expected.
* Change the topic to test.
* Change the language to eng.
* Store all the data (English and Dutch books) in an array.
* Split getters into multiple files by topic.

## Honourable mentions

* [Folkert-Jan](https://github.com/FJvdPol).
    Folkert-Jan created the boilerplate for communicating with the OBA api.
* [Daniël](https://github.com/DanielvandeVelde).
    Daniël helped me a lot by having a great readme, which explained pretty much the whole OBA api in an easy way.