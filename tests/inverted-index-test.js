const invertedIndex = require('../src/inverted-index.js').InvertedIndex();
// const invertedIndex = new InvertedIndex();
const validFile = [
  {
    "title": "dsdsdsd",
    "text": "dsdsdsd"
  },
  {
    "title": "sdsdsds",
    "text": "sdsdsd"
  }
];

const malformed = [
  {
    "ti": "dsdsdsd",
    "tet": "dsdsdsd"
  },
  {
    "ti": "sdsdsds",
    "tt": "sdsdsd"
  }
];

const invalid = ['cold'];

const empty = [
  {
    "title": "",
    "text": ""
  },
  {
    "title": "",
    "text": ""
  }
];

describe('Inverted Index Suite', () => {
  describe('The inverted index isValid method', () => {
    const validBook = invertedIndex.isValid(book);

    it('should return type of object', () => {
      expect(validBook instanceof Object).toBeTruthy();
    });

    it('should return valid JSON for valid books', () => {
      expect(validBook(validFile)).toEqual('Valid JSON');
    });

    it('should return Invalid JSON for invalid books', () => {
      expect(validBook(invalid)).toEqual('Valid JSON');
    });

    it('should return Malformed JSON for Malformed books', () => {
      expect(validBook(malformed)).toEqual('Malformed JSON');
    });

    it('should return Empty JSON for Empty books', () => {
      expect(validBook(empty)).toEqual('Empty JSON');
    });
  });
});
