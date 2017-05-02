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
    this.allFiles = {};
    this.books = {};
  }

}

/**
 * Validate Method
 * @param {Object} object to be validated
 * @returns {Object} returns true and false
 */
isValid(books) {
  if(books instanceof Object) {
    let answer = 'Empty JSON';
    Object.keys(books).forEach((book) => {
      if(books[book].title === undefined) {
        answer = 'Malformed JSON';
      }
      else if(books[book].title.length !== 0 || books[book].text.length !== 0) {
        answer = 'Valid JSON';
      }
      return answer;
    });
    return answer; 
  }
  else {
    return 'Invalid JSON';
  }
}

module.exports={InvertedIndex};