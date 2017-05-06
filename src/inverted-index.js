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
    this.allBooks = {};
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
  joinTextTitle() {
    let result = [];
    let bookTitle = [];
    let bookText = [];
    Object.keys(this.books).forEach((book) => {
      bookTitle = this.books[book].title;
      bookText = this.books[book].text;
      result.push(bookTitle, bookText);
    });
    // .join method converts result array to string
    result = result.join(' ').toLowerCase();
    return result;
  }
  /**
   *  
  */
  tokenize() {
    let tokens = [];
    tokens = this.joinTextTitle().split(' ').sort().map((words) => {
      return words.replace(/([^\w]+)/g, '');
      // console.log(words)
    });
    // console.log(typeof tokens);
    return tokens;
  }
}

module.exports = InvertedIndex;
