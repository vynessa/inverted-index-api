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
    this.allFiles = [];
    this.books = {};
  }
  /**
   * Validate books in a file
   * @param {object} books
   * @returns {sring} response
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
   * @returns {string} result  
  */
  joinTextTitle(books) {
    let result = [];
    let bookTitle = [];
    let bookText = [];
    Object.keys(books).forEach((book) => {
      bookTitle = books[book].title;
      bookText = books[book].text;
      result.push(bookTitle, bookText);
    });
    result = result.join(' ').toLowerCase();
    return result;
  }
  /**
   *  
  */
  tokenize(text) {
    let tokens = [];
    tokens = this.joinTextTitle(text).split(' ').sort().map((words) => {
      return words.replace(/([^\w]+)/g, '');
    });
    return tokens;
  }
}

module.exports = InvertedIndex;
