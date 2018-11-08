# Day by day process

## Week 1

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
The code for these helper functions can be found in [this file](../api/getters.js).

### Day 4

Today I picked the variables required to answer this question in particular.
I picked these by looking through the data, looking at the information that I have and know.
For the rest of the time I wrote some more [getters](../api/getters.js).

### Day 5

Today I created the hypothese for the research case.

As for the rest of this day, I mainly helped [Chelsea Doeleman](https://github.com/chelseadoeleman), [Linda de Haan](https://github.com/LindadeHaan) and [Jessie Mason](https://github.com/jessiemasonx) getting their data structure up and running.

I also managed to get the pagination working, with the help of the [oba wrapper from Wouter](https://github.com/maanlamp/node-oba-api-wrapper).

I finally got the notion that the nationality of the renter is not available at this very moment, unfortunately, which made me change my hypothese from:

_"The amount of English books that are published per year has increased in the past fifteen years, while Dutch books are staying around the same amount, due to the increase in international students."_

to:

_"The amount of English books that are published per year has increased in the past fifteen years, while Dutch books are staying around the same amount."_

## Week 2

### Day 6

I originally planned to make a stacked area chart with the data that I had gathered, however after seeing the insane syntax and more complex data structure, I went for the simple line diagram. Which I had tried to get running in Observable.

Unfortunately I did not get this running today, because the data structure I wrote needs to change a lot for this to work.

### Day 7

Today we had some major difficulties with the OBA API.
The API wouldn't give us any data back anymore, which caused us to stop being productive relatively fast.

I deciced to clean up this readme and call it a day.

### Day 8

Starting off the day with a bug, an hour later and still no fix, so I decided to go ask Titus what could be wrong with the OBA API and soon we realized that we were communicating with the staging environment of the API instead of the production version.

This bug showed itself, because funny enough another developer probably broke something in the staging environment.

For the rest of the day I mainly focussed on helping others with getting their code to work, as well as getting my D3 up and running with the data I get back from the OBA API.
I had to transform some things before it worked with the datastructure the D3 visualization wanted to have.

### Day 9

Today I started cleaning up the graph and making it look a little bit better.
I split a lot of code into their own functions in Observable, and made the code more readable.
I also managed to get the curved shape that I wanted to have for the graph.
The rest of the time I spent analyzing the graph and try to come up with conclusions.