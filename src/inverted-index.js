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
  isValid(books) {
    if (books instanceof Object) {
      let response = 'Empty JSON';
      Object.keys(books).forEach((book) => {
        if (books[book].title === undefined || books[book].text === undefined) {
          response = 'Malformed JSON';
        } else if (books[book].title.length !== 0 || books[book].text.length !== 0) {
          response = 'Valid JSON';
        }
        return response;
      });
      return response;
    }
    return 'Invalid JSON';
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
  tokenize(text) {
    let tokens = [];
    tokens = InvertedIndex.joinTextTitle(text).split(' ').sort().map((words) => {
      return words.replace(/([^\w]+)/g, '');
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
   * @returns {object} indexed
  */
  createIndex(fileName, fileContent) {
    const indexed = {};
    fileContent.forEach((book, index) => {
      const arrOfWords = this.tokenize([book]);
      arrOfWords.forEach((token) => {
        if (!(token in indexed)) {
          indexed[token] = [index];
        }
        indexed[token].push(index);
      });
    });
    return indexed;
  }
}

module.exports = InvertedIndex;
