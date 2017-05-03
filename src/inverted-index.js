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

  static isValid(books) {
    if (books instanceof Object) {
      let answer = 'Empty JSON';
      Object.keys(books).forEach((book) => {
        if (books[book].title === undefined) {
          answer = 'Malformed JSON';
        } else if (books[book].title.length !== 0 || books[book].text.length !== 0) {
          answer = 'Valid JSON';
        }
        return answer;
      });
      return answer;
    } else {
      return 'Invalid JSON';
    }
  }

}


module.exports={InvertedIndex};