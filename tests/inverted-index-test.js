// import fs from 'fs';
import validFile from '../fixtures/validFile.json';
import invalidFile from '../fixtures/invalidFile.json';
import emptyFile from '../fixtures/emptyFile.json';
import malformedFile from '../fixtures/malformedFile.json';
import InvertedIndex from '../src/inverted-index';
// const invertedIndex = require('../src/inverted-index.js');

const invObj = new InvertedIndex();

describe('Inverted Index Suite:', () => {
  // describe('Read File function', () => {
  //   it('should', () => {

  //   });
  const validBook = invObj.isValid(validFile);
  const invalidBook = invObj.isValid(invalidFile);
  const malformedBook = invObj.isValid(malformedFile);
  const emptyBook = invObj.isValid(emptyFile);

  describe('The inverted index isValid method', () => {
    it('should return type of ', () => {
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

  describe('Join text and title function', () => {
    it('should return a string with the joined text and title in lowercases', () => {
      let newBook = [
        {
          'title': 'Alice in the wonder land',
          'text': 'I am not as lazy as Alice'
        },
        {
          'title': 'Lady',
          'text': 'The lady is 50 years old. SHe has a child'
        }
      ];

      const newTextTitle = 'alice in the wonder land i am not as lazy as alice lady the lady is 50 years old. she has a child'
      newBook = InvertedIndex.joinTextTitle(newBook);
      expect(newTextTitle).toEqual(newBook);
    });
  });

  describe('Remove duplicates word', () => {
    it('should return only unique words in an array', () => {
      let getWords = 
      [ 'broken',
        'colour',
        'crayons',
        'go',
        'go',
        'he',
        'he',
        'is',
        'is',
        'poem',
        'premier',
        'queen',
        'still',
        'to',
        'to',
        'up',
        'up',
        'yes' ];

      const uniqueWords = 
      [ 'broken',
        'colour',
        'crayons',
        'go',
        'he',
        'is',
        'poem',
        'premier',
        'queen',
        'still',
        'to',
        'up',
        'yes' ]

      getWords = InvertedIndex.removeDuplicates(getWords);
      expect(uniqueWords).toEqual(getWords);
    });
  });

  describe('Tokenize function', () => {
    it('should return in an array tokens for each file', () => {
      let newBook = [
        {
          'title': 'Alice in the wonder land',
          'text': 'I am not as lazy as Alice'
        },
        {
          'title': 'Lady',
          'text': 'The lady is 50 years old. SHe has a child'
        }
      ];

      const result =
      [ 'a',
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

      newBook = invObj.tokenize(newBook);
      expect(result).toEqual(newBook);
    });
  });


  
  // describe('Create Index function', () => {
  //   it('should return the accurate index for each word\'s  occurence in a book', () => {
  //     let 
  //     const createdIndex = 
  //     { go: [ 0 ],
  //       he: [ 0, 1 ],
  //       is: [ 0 ],
  //       premier: [ 0 ],
  //       queen: [ 0 ],
  //       to: [ 0 ],
  //       up: [ 0 ],
  //       yes: [ 0 ],
  //       broken: [ 1 ],
  //       colour: [ 1 ],
  //       crayons: [ 1 ],
  //       poem: [ 1 ],
  //       still: [ 1 ] }
  //   });
  // });
});
