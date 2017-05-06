// import fs from 'fs';
import validFile from '../fixtures/validFile.json';
import invalidFile from '../fixtures/invalidFile.json';
import emptyFile from '../fixtures/emptyFile.json';
import malformedFile from '../fixtures/malformedFile.json';
// import news from '../fixtures/news.json';
import InvertedIndex from '../src/inverted-index';
// const invertedIndex = require('../src/inverted-index.js');

const invObj = new InvertedIndex();



describe('Inverted Index Suite:', () => {
  describe('The inverted index isValid method', () => {
    const validBook = invObj.isValid(validFile);
    const invalidBook = invObj.isValid(invalidFile);
    const malformedBook = invObj.isValid(malformedFile);
    const emptyBook = invObj.isValid(emptyFile);
    // console.log('I m here', validBook)

    it('should return type of object', () => {
      expect(validBook).toEqual('Valid JSON');
    });

    it('should return type of object', () => {
      expect(invalidBook).toEqual('Invalid JSON');
    });

    it('should return type of object', () => {
      expect(malformedBook).toEqual('Malformed JSON');
    });

    it('should return type of object', () => {
      expect(emptyBook).toEqual('Empty JSON');
    });

  
    // it('should return true if file has property "title" and "text"', () => {
    //   expect(invertedIndex.isValid(news)).toEqual('Valid JSON');
    // });

    // it('should return true if file has property "title" and "text"', () => {
    //   expect(invertedIndex.isValid(validFile)).toEqual('Valid JSON');
    // });

    // it('should return false for files without property "title" and "text"', () => {
    //   expect(invertedIndex.isValid(invalidFile)).toEqual('Invalid JSON');
    // });

    // it('should return false if the file is Malformed', () => {
    //   expect(invertedIndex.isValid(malformedFile)).toEqual('Malformed JSON');
    // });

    // it('should return false for Empty JSON files', () => {
    //   expect(invertedIndex.isValid(emptyFile)).toEqual('Empty JSON');
    // });
  });

  // describe('Read File function', () => {
  //   it('should', () => {

  //   });

  //   it('should', () => {

  //   });
  // });
  describe('Tokenize function', () => {
    it('should return in an array tokenize words for each file', () => {
      let book1 = [
        {
          'title': 'Alice in the wonder land',
          'text': 'I am not as lazy as vanilla'
        },
        {
          'title': 'Girl',
          'text': 'SHe has a child'
        }
      ];

      let result = 
        ['a',
          'alice',
          'am',
          'as',
          'as',
          'child',
          'girl',
          'has',
          'i',
          'in',
          'land',
          'lazy',
          'not',
          'she',
          'the',
          'vanilla',
          'wonder'];      

      book1 = invertedIndex.tokenize(book1);

      expect(invertedIndex.tokenize(book1)).toEqual(result);
    });

    // it('should return ', () => {

    // });
  });

  // describe('Remove duplicates word function', () => {

  // });

  // describe('Create Index function', () => {

  // });


});
