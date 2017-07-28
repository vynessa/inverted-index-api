# inverted-index-api
An Inverted Index Api for implementing efficient search functionality for software applications.

[![Travis Build](https://travis-ci.org/vynessa/inverted-index-api.svg?branch=back-end)](https://travis-ci.org/Vynessa/inverted-index-api)
[![Coverage Status](https://coveralls.io/repos/github/vynessa/inverted-index-api/badge.svg?branch=master)](https://coveralls.io/github/vynessa/inverted-index-api?branch=master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/5753db48a1b44004bd69b3b88085df2b)](https://www.codacy.com/app/Vynessa/inverted-index-api?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Vynessa/inverted-index-api&amp;utm_campaign=Badge_Grade)

## Introduction
Inverted Index API is a NodeJS Powered implementation of the inverted index data structure for finding what word is in what 'book'. A 'book' is an entry in a document structured as a JSON array. Here is a sample document:


## Dependencies

### Backend Dependencies
 This app's functionality depends on multiple NodeJS packages
* [NodeJS](https://nodejs.org/) This is a JavaScript runtime built on Chrome's V8 JavaScript engine. It is used for installing and managing the dependencies.
* [Express](https://expressjs.com/) This is used to create the web routes/endpoints.
* [Body-Parser](https://www.npmjs.com/package/body-parser) This is used for parsing the content of forms sent to the web app.
* [dotenv](https://www.npmjs.com/package/dotenv) This handles the management and dynamic assignment of environmental variables
* [body-parser](https://www.npmjs.com/package/body-parser) This parses the request into a body that can be accessed.
* [multer](https://github.com/expressjs/multer) This handles file uploads to the app

## Installation guide
To run the app,
* Clone [this](https://github.com/Vynessa/inverted-index-api/tree/develop) repository
* Navigate your git terminal to the root of this project
* Run `npm install` at the root of the project folder to install dependencies
* Run `gulp serve` to run the app
* Connect to port `8080` on your local host

## Usage

### With [POSTMAN](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en)
#### Creating Index
* Set the address to `localhost:8080/api/create and Method to POST
* Choose `form-data` in the `Body` category of the type of data to send
* Set a key called `files` and set it's type to file
* Ensure there are no headers set, delete any that exists
* Click on `Choose Files` to select files from your local storage (Files must meet the specs stated earlier)
* Click on send to get and index object for the content of the files uploaded.

#### Searching Index
* Copy the index created by the api/create route
* Create a new tab on `Postman`
* Set the address to `localhost:8080/api/search and method to POST
* Choose `x-www-form-urlencoded` in the body category of the type of data to send
* Set a key of `fileName`, and for the value, put in the copied index
* Set a key of `searchTerms`, and set it to the terms to search for 
* Set an optional key of fileName, and set it to the name of the file whose indexed content you want to search
* Click send to get a response of each term you searched, and an array of numbers indicating what book they appear in

### Limitations
* The Search function for querying multiple files is yet to be implemented. Searching can only be performed on one file.

## Sample Index

* Suppose we have a file containing this below:
```
[
    {
      'title': 'Queen Premier',
      'text': 'Is he to go up? Yes, he is to go up.'
    },
    {
      'title': 'Poem',
      'text': 'Broken crayons still colour.'
    }
]

```
* With file name `validFile.json`, the resulting created index will be:

```
{
  "validFile.json": {
    "go": [
      0
    ],
    "he": [
      0
    ],
    "is": [
      0
    ],
    "premier": [
      0
    ],
    "queen": [
      0
    ],
    "to": [
      0
    ],
    "up": [
      0
    ],
    "yes": [
      0
    ],
    "broken": [
      1
    ],
    "colour": [
      1
    ],
    "crayons": [
      1
    ],
    "poem": [
      1
    ],
    "still": [
      1
    ]
  }

```
* If the index is queried, for `crayons`, `poem` and `colour`, the result would be

```
{
  "validFile.json": {
    "crayons": [ 
        1 
      ],
    "poem": [ 
        1 
      ],
    "colour": [ 
        1 
      ]
  }
}

```
## Connecting on Heroku
* Navigate to this [link](https://invindex.herokuapp.com/) and follow the steps stated above.

# Contributing
Contributions are welcome and appreciated. To contribute
* Fork this repository and peruse [here](https://github.com/Vynessa/inverted-index-api)
* Submit a pull request if you feel you have substantial updates :)
* I look forward to your Pull Requests!