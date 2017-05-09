// import fs from 'fs';
/**
 * Inverted-index class
 * @class
 */
class InvertedIndex {
 /**
  * class constructor
  * @constructor
  */
  constructor() {
    this.allIndices = {};
    this.allFiles = {};
  }
  /**
   * Validate books in a file
   * @function
   * @param {object} books
   * @returns {string} response
   */
  static isValid(books) {
    let response = 'Invalid JSON';
    if (books instanceof Object) {
      Object.keys(books).forEach((book) => {
        if (books[book].title !== undefined && books[book].text !== undefined) {
          if (books[book].title.length !== 0) {
            response = 'Valid JSON';
          } else {
            response = 'Empty JSON';
          }
        } else {
          response = 'Malformed JSON';
        }
      });
    }
    return response;
  }
  /**
   * Joins text and title and pushes into an Array
   * @function
   * @param {object} books
   * @returns {string} result
   */
  static joinTextTitle(books) {
    let result = [];
    let bookTitle = [];
    let bookText = [];
    Object.keys(books).forEach((book) => {
      bookTitle = books[book].title;
      bookText = books[book].text;
      result.push(bookTitle, bookText);
    });
    // .join method converts result[array] to string
    result = result.join(' ').toLowerCase();
    return result;
  }
  /**
   * Remove duplicate word from tokens
   * @function
   * @param {array} words
   * @returns {array} unique tokens
   */
  static removeDuplicates(words) {
    return words.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
  }
  /**
   * Tokenize splits words into tokens and sorts them into an array
   * @function
   * @param {string} text
   * @returns {array} tokens
   */
  static tokenize(text) {
    let tokens = [];
    tokens = InvertedIndex.joinTextTitle(text).split(' ').sort().map((words) => {
      return words.replace(/([^a-z A-Z 0-9]+)/g, '');
    })
    .filter((e) => {
      return e;
    });

    tokens = InvertedIndex.removeDuplicates(tokens);
    return tokens;
  }
  /** Create Index for each word in a given fileName
   * @function
   * @param {string} fileName
   * @param {array} fileContent
   * @returns {object} this.allIndices
   */
  createIndex(fileName, fileContent) {
    if (InvertedIndex.isValid(fileContent) === 'Valid JSON') {
      const indexed = {};
      fileContent.forEach((book, index) => {
        const arrOfWords = InvertedIndex.tokenize([book]);
        arrOfWords.forEach((word) => {
          if (!(word in indexed)) {
            indexed[word] = [index];
          } else if (!(indexed[word].includes(index))) {
            indexed[word].push(index);
          }
        });
      });

      if (!Object.prototype.hasOwnProperty.call(this.allIndices, fileName)) {
        this.allIndices[fileName] = indexed;
      }
      this.allFiles[fileName] = fileContent.length;
      return this.allIndices;
    }
    return 'Error: The file is not a correct JSON file!';
  }
  /**
   * Merges search terms of different data types ginto one array
   * @function
   * @param {array} data
   * @return {array} data
   */
  static flattenSearchArray(data) {
    return data.reduce((a, b) => a.concat(b), []);
  }
  /**
   * Sanitize cleans up the search term passed in by the user
   * @function
   * @param {array} term
   * @return {array} term
   */
  static sanitize(term) {
    return term.replace(/([^a-z A-Z 0-9]+)/g, '').toLowerCase().split(' ');
  }
  /** Search Index searches global variable `this.allIndices` for terms passed in by the user
   * @function
   * @param {array} index
   * @param {string} fileName
   * @param {array} searchTerm
   * @return {object} searchResult
  */
  searchIndex(index, fileName, ...searchTerm) {
    searchTerm = InvertedIndex.flattenSearchArray(searchTerm);
    const searchResult = {};
    const searchResultKey = {};
    let newSearchTerm = [];
    if (searchTerm === '') {
      return 'Please enter a valid search term!';
    }
    searchTerm.forEach((term) => {
      newSearchTerm.push(InvertedIndex.sanitize(term));
    });
    newSearchTerm = InvertedIndex.flattenSearchArray(newSearchTerm);
    newSearchTerm.forEach((word) => {
      Object.keys(index[fileName]).forEach((key) => {
        if (word === key) {
          searchResultKey[word] = index[fileName][key];
        }
      });
    });
    searchResult[fileName] = searchResultKey;
    return searchResult;
  }
}

module.exports = InvertedIndex;
