// import fs from 'fs';
import validFile from '../fixtures/validFile.json';
import invalidFile from '../fixtures/invalidFile.json';
import emptyFile from '../fixtures/emptyFile.json';
import malformedFile from '../fixtures/malformedFile.json';
import InvertedIndex from '../src/inverted-index';
// const invertedIndex = require('../src/inverted-index.js');

const invObj = new InvertedIndex();



describe('Inverted Index Suite:', () => {
  const validBook = invObj.isValid(validFile);
  const invalidBook = invObj.isValid(invalidFile);
  const malformedBook = invObj.isValid(malformedFile);
  const emptyBook = invObj.isValid(emptyFile);

  describe('The inverted index isValid method', () => {
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
  });

  describe('Tokenize function', () => {
    it('should return in an array tokenized words for each file', () => {
      // let book1 = [
      //   {
      //     'title': 'Alice in the wonder land',
      //     'text': 'I am not as lazy as vanilla'
      //   },
      //   {
      //     'title': 'Girl',
      //     'text': 'SHe has a child'
      //   }
      // ];

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

      // book1 = invObj.tokenize(book1);

      expect(invObj.tokenize(validBook)).toEqual(result);
    });
  });

  // describe('Remove duplicates word function', () => {

  // });

  // describe('Create Index function', () => {

  // });

  // describe('Read File function', () => {
  //   it('should', () => {

  //   });

  //   it('should', () => {

  //   });
  // });


});
