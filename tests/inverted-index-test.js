// const fs = require('fs');
// const invertedIndex = new InvertedIndex();
const invertedIndex = require('../src/inverted-index.js').InvertedIndex;
const validFile = require('../fixtures/validFile.json'),
  invalidFile = require('../fixtures/invalidFile.json'),
  emptyFile = require('../fixtures/emptyFile.json'),
  malformedFile = require('../fixtures/malformedFile.json'),
  news = require('../fixtures/news.json');

describe('Inverted Index Suite:', () => {
  describe('The inverted index isValid method', () => {
    // const validBook = invertedIndex.isValid();

    it('should return type of object', () => {
      expect(invertedIndex.isValid instanceof Object).toBeTruthy();
    });

    it('should return true if file has property "title" and "text"', () => {
      expect(invertedIndex.isValid(news)).toEqual('Valid JSON');
    });

    it('should return false for files without property "title" and "text"', () => {
      expect(invertedIndex.isValid(invalidFile)).toEqual('Invalid JSON');
    });

    it('should return false if the file is Malformed', () => {
      expect(invertedIndex.isValid(malformedFile)).toEqual('Malformed JSON');
    });

    it('should return false for Empty JSON files', () => {
      expect(invertedIndex.isValid(emptyFile)).toEqual('Empty JSON');
    });
  });

  // describe('Read File function', () => {
  //   it('should', () => {

  //   });

  //   it('should', () => {

  //   });
  // });

  describe('Read File function', () => {
    it('should', () => {

    });

    it('should', () => {

    });
  });

  describe('Tokenize', () => {
    it('should return in an array the title plus text content for each file', () => {

    });

    it('should', () => {

    });
  });
});
