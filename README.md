# Functional Programming

## Research

### Research questions

1. How has the amount of different book genres published, in the past 15 years, changed?
    * What major book genres were published?
    * What major book genres became more popular?
    * What major book genres became less popular?
    * What are monumental increases and decreases?
    * How could these increases and decreases best be explained?
2. How has the amount of books that are rented out changed in the past 15 years?
    * How much books were rented out per year from the OBA?
    * How does this growth or decline in rented books compare to state in which books are in?
    * What are monumental increases and decreases?
    * How could these increases and decreases best be explained?
3. How has the amount of (cover) images on books changed in the past 15 years?
    * What is the average amount of cover images on books in a given year?
    * What are monumental increases and decreases?
    * How could these increases and decreases best be explained?
4. What is the relationship between title and description length of books?
    * What is the average title length for each year?
    * What is the average description length for each year?
    * How do these two variables relate?
    * What are monumental increases and decreases in title and / or description length?
    * How could these increases and decreases best be explained?
5. How has the division between Dutch and English study-books at the OBA changed in the past 15 years?
    * What is the amount of books in a given language per year?
    * Has this division increased or decreased?
    * What are monumental increases and decreases?
    * How could these increases and decreases best be explained?
    * _If available_: Does the increase or decrease have something to do with the increased amount of English   speaking people in Amsterdam?
    * Is this increase or decrease truthy for all books, not just for study-books?
6. How has the average age of authors in the children-book genre changed in the past 15 years?
    * What is the average age of authors of books in the children-book genre?
    * What are monumental increases and decreases?
    * How could these increases and decreases best be explained?
7. How does the amount of published books per year correlate with the amount of cover images in books?
    * How has the amount of cover images in books changed in the past 15 years?
    * How has the amount of published books changed in the past 15 years?
    * Is there an influence of the amount of cover images on books and the amount of books that are published?
8. How does the amount of published books per year correlate with average title and description length in books?
    * How has the length of titles and descriptions changed in the past 15 years?
    * How has the amount of published books changed in the past 15 years?
    * Is there an influence of the title/description length  onbooks and the amount of books that are published?
9. How does the amount of English speaking expats in Amsterdam correlate with the the amount of English books published?
    * How much English speaking expats are there in Amsterdam per year?
    * How has the amount of English books at the OBA changed in the past 15 years?

### Main research question

**Question**

* How has the division between Dutch and English study-books at the OBA changed in the past 15 years?

**Sub questions**

* What is the amount of books in a given language per year?
* Has this division increased or decreased?
* What years have monumental increases and decreases?
* How could these increases and decreases best be explained?
* _If available_: Does the increase or decrease have something to do with the increased amount of English speaking people in Amsterdam?
* Is this increase or decrease truthy for all books, not just for study-books?

**Variables**

* Language of a book
* Date of publication
* Genre of a book
* _If available_: nationality of the renter

### Hypothese

The amount of English books that are published per year has increased in the past fifteen years, while Dutch books are staying around the same amount.

### Possible visualisation types

* Multi line diagram.
* Stacked area chart.
* Stacked bar chart.
* Multi bar chart.
* Flowchart.
* Multi area chart.

### Sketches

![sketch 1](docs/sketch_1.jpg)

![sketch 2](docs/sketch_2.jpg)

### Visualisation

[Observable](https://beta.observablehq.com/d/ddabbcd1ef7a7741)

## Process

### Summary

During these two weeks I mainly focussed myself on helping others, and finding help with others, mainly [Chelsea Doeleman](https://github.com/chelseadoeleman), [Linda de Haan](https://github.com/LindadeHaan) and [Jessie Mason](https://github.com/jessiemasonx).

These two weeks were more difficult for me than the **Frontend-Applications** weeks, because the API has proven itself to be quite a challenge to work with.
The fact that this was challenging, was mainly because I had not worked with API's (except for GraphQL) a lot until now.
The other reason was simply because the API gives back an overly complex datastructure.

To deal with this, I got a lot of help from mainly [Daniël](https://github.com/DanielvandeVelde), [Wouter](https://github.com/maanlamp) and [Chelsea](https://github.com/chelseadoeleman).

I used the paginated boilerplate from Wouter as a base for communicating with the OBA API, while using Daniëls great [README](https://github.com/DanielvandeVelde/functional-programming/blob/master/README.md) to help with the documentation.

Chelsea was a great help at generalizing complex data structures, to a way that it is more easy for me to write it.

Your daily dose of functional programming can be found in [this file](api/getters.js), which is where I wrote all my functions, which handle the getting of incoming data and transforming this data to D3 usable JSON.

It has been proven to be pretty tough to focus on both writing code, getting a deeper understanding in this data and visualizing this pretty much all at the same time.

I had hoped this concept of mine (languages of books at the OBA) could be combined with data of expats living in Amsterdam and the increase or decrease in that in the past years, unfortunately I ran out of time to do combine this.

I also found out that writing transformation code (for D3) before knowing what your client wants to have is not a good idea, since I needed to rewrite it multiple times over afterwards.

What I quickly realised after starting getting dependent of others peoples code, was that when something breaks, you will have to help them find the fix, otherwise you are stuck as well.

In the end, I have gotten to like this style of writing a lot, it keeps things (like [index.js](index.js)) very readable, while also gaining the ability to do some kind of type checking per function in JavaScript (I did not know [these kind of comments](api/getters.js) were possible).

It is still not as good as [TypeScript](https://www.typescriptlang.org) in my opinion though. 👀

_The longer log of my process can be found [here](docs/PROCESS.md)!_

## Development

### Tools

* [Nodemon](https://nodemon.io)
* [Yarn](https://yarnpkg.com/en/)

### Packages

**Disclaimer**

I know I could have written my own code for this lodash package, but why would I reinvent the wheel.

* [lodash.range](https://www.npmjs.com/package/lodash.range) - Used for creating an array of intermediate values by passing two values to this function.

## Future enhancements

* Convert everything to TypeScript.
* Add more languages like French and German.
* Bind this data with data about the nationalities of citizens living in Amsterdam (GDPR-friendly?).
* Convert the D3 to client side code instead of Observable, so it can receive dynamic data from the server.
* Add animations to the visualization.
* Request a larger time frame than 15 years.
* Enable more requests to be processed efficiently, so that the limit can go way higher.

## Honourable mentions

* [Folkert-Jan](https://github.com/FJvdPol):
    Folkert-Jan created the [boilerplate](https://github.com/FJvdPol/functional-programming/blob/master/oba-api.js) for communicating with the OBA API.
* [Daniël](https://github.com/DanielvandeVelde):
    Daniël helped me a lot by having a great [README](https://github.com/DanielvandeVelde/functional-programming/blob/master/README.md), which explained pretty much the whole OBA API in an easy way.
* [Wouter](https://github.com/maanlamp):
    Wouter created the [boilerplate for pagination](https://github.com/maanlamp/node-oba-api-wrapper) with the OBA API.
* [Chelsea](https://github.com/chelseadoeleman):
    Chelsea helped me get over my overly complex thinking and just getting stuff done.