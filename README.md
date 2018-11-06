# Functional Programming

## Research

### Research questions

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

### Main research question

**Question**

* How has the division between Dutch and English study-books at the OBA changed in the past 5 years?

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

The amount of English books that are published per year has increased in the past five years, while Dutch books are staying around the same amount.

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

## Process

### Day 1

Today we got the assignment explained by an employee of the OBA.
We got an API endpoint, which we will need to fetch data from and show the user an interesting story with it.

After getting the assignment we got a bootcamp of Titus, which showed a lot of functional programming ins-and-outs I already knew, however some things, like `String.prototype.endsWith()`, I had never heard of before.

The rest of the time we tried to get the API to work with JavaScript ([Node](https://nodejs.org/en/)). Here we already pretty much hit a wall, knowing that the API is really bad and outdated.

### Day 2

Today I started thinking of questions, which I could answer by looking at the data I could gather.
I have made up a lot of questions, to broaden my horizon when getting the data back from the API.

As for the rest of the day I mainly focussed on getting the _details_ and _availability_ route to work and show me data. I tried to split the code up in readable chunks as much as possible.

### Day 3

Today I created a lot of sub questions for the main research questions.
I tried to think of a lot of sub questions once more.

I also created a lot of helper functions to get the data in a safe way. I could have used lodash's `get` method for this, but I think the pure JS way is more elegant.
The code for these helper functions can be found in [this file](api/getters.js).

### Day 4

Today I picked the variables required to answer this question in particular.
I picked these by looking through the data, looking at the information that I have and know.
For the rest of the time I wrote some more [getters](api/getters.js).

### Day 5

Today I created the hypothese for the research case.

As for the rest of this day, I mainly helped [Chelsea Doeleman](https://github.com/chelseadoeleman), [Linda de Haan](https://github.com/LindadeHaan) and [Jessie Mason](https://github.com/jessiemasonx) getting their data structure up and running.

I also managed to get the pagination working, with the help of the [oba wrapper from Wouter](api/oba-wrapper.js).

I finally got the notion that the nationality of the renter is not available at this very moment, unfortunately, which made me change my hypothese from:

_"The amount of English books that are published per year has increased in the past five years, while Dutch books are staying around the same amount, due to the increase in international students."_

to:

_"The amount of English books that are published per year has increased in the past five years, while Dutch books are staying around the same amount."_

### Day 6

I originally planned to make a stacked area chart with the data that I had gathered, however after seeing the insane syntax and more complex data structure, I went for the simple line diagram. Which I had tried to get running in Observable.
Unfortunately I did not get this running today, because the data structure I wrote needs to change a lot for this to work.

### Day 7

Today we had some major difficulties with the OBA API.
The API wouldn't give us any data back anymore, which caused us to stop being productive relatively fast.
I deciced to clean up this readme and call it a day.

## Honourable mentions

* [Folkert-Jan](https://github.com/FJvdPol):
    Folkert-Jan created the boilerplate for communicating with the OBA API.
* [Daniël](https://github.com/DanielvandeVelde):
    Daniël helped me a lot by having a great readme, which explained pretty much the whole OBA API in an easy way.
* [Wouter](https://github.com/maanlamp):
    Wouter created the boilerplate for pagination with the OBA API.
* [Chelsea Doeleman](https://github.com/chelseadoeleman):
    Chelsea helped me get over my overly complex thinking in some situations.