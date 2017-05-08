/* eslint no-undef: 0 */
// import fs from 'fs';
import validFile from '../fixtures/validFile.json';
import invalidFile from '../fixtures/invalidFile.json';
import emptyFile from '../fixtures/emptyFile.json';
import malformedFile from '../fixtures/malformedFile.json';
import InvertedIndex from '../src/inverted-index';

// Create an instance of InvertedIndex class
const invObj = new InvertedIndex();

// Test Parameter for createIndex test
const createdIndex =
  { validFile:
  { go: [0],
    he: [0],
    is: [0],
    premier: [0],
    queen: [0],
    to: [0],
    up: [0],
    yes: [0],
    broken: [1],
    colour: [1],
    crayons: [1],
    poem: [1],
    still: [1] } };

const searchResult =
  { validFile:
  { crayons: [1],
    poem: [1],
    colour: [1] } };

describe('Inverted Index Suite:', () => {
  // Parameters for isValid method tests
  const validBook = InvertedIndex.isValid(validFile);
  const invalidBook = InvertedIndex.isValid(invalidFile);
  const malformedBook = InvertedIndex.isValid(malformedFile);
  const emptyBook = InvertedIndex.isValid(emptyFile);

  describe('Inverted Index Method checker', () => {
    it('should have `isValid` as a method', () => {
      expect(InvertedIndex.isValid).toBeDefined('function');
    });

    it('should have `joinTextTitle` as a method', () => {
      expect(InvertedIndex.joinTextTitle).toBeDefined('function');
    });

    it('should have `removeDuplicates` as a method', () => {
      expect(InvertedIndex.removeDuplicates).toBeDefined('function');
    });

    it('should have `tokenize` as a method', () => {
      expect(InvertedIndex.tokenize).toBeDefined('function');
    });

    it('should have `flattenArray` as a method', () => {
      expect(InvertedIndex.flattenArray).toBeDefined('function');
    });

    it('should have `sanitize` as a method', () => {
      expect(InvertedIndex.sanitize).toBeDefined('function');
    });

    it('should have `createIndex` as a method', () => {
      expect(invObj.createIndex).toBeDefined('function');
    });

    it('should have `searchIndex` as a method', () => {
      expect(invObj.searchIndex).toBeDefined('function');
    });
  });

  describe('Inverted index JSON Validation method', () => {
    it('should return \'Valid JSON\' for valid JSON types', () => {
      expect(validBook).toEqual('Valid JSON');
    });

    it('should return \'Invalid JSON\' for invalid JSON type', () => {
      expect(invalidBook).toEqual('Invalid JSON');
    });

    it('should return \'Malformed JSON\' for malformed JSON type', () => {
      expect(malformedBook).toEqual('Malformed JSON');
    });

    it('should return \'Empty JSON\' for empty JSON type', () => {
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

      const newTextTitle = 'alice in the wonder land i am not as lazy as alice lady the lady is 50 years old. she has a child';
      newBook = InvertedIndex.joinTextTitle(newBook);
      expect(newTextTitle).toEqual(newBook);
    });
  });

  describe('Remove duplicate words function', () => {
    it('should return only unique words in an array', () => {
      let getWords =
        ['broken',
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
          'yes'];

      const uniqueWords =
        ['broken',
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
          'yes'];

      getWords = InvertedIndex.removeDuplicates(getWords);
      expect(uniqueWords).toEqual(getWords);
    });
  });

  describe('Tokenize function', () => {
    it('should return in an array tokens for each file', () => {
      // Parameter to be used to test for correctness of the tokenize method
      let newBook = [ 
        {
          'title': 'Alice in Wonderland',
          'text': 'I am not as lazy as Alice'
        },
        {
          'title': 'Lady',
          'text': 'The lady is 50 years old. SHe has a child'
        }
      ];

      // Expected result after newBook is passed into tokenize function
      const result =
        ['50',
          'a',
          'alice',
          'am',
          'as',
          'child',
          'has',
          'i',
          'in',
          'is',
          'lady',
          'lazy',
          'not',
          'old',
          'she',
          'the',
          'wonderland',
          'years'];

      newBook = InvertedIndex.tokenize(newBook);
      expect(result).toEqual(newBook);
    });
  });

  describe('Create Index function', () => {
    it('should return error message if JSON file is `Invalid`, `Malformed` or `empty` file.', () => {
      expect(invObj.createIndex(invalidFile)).toEqual('Error: The file is not a correct JSON file!');
    });

    it('should return in an object a file name as key, and accurate index for every word\'s  occurence in a book', () => {
      const newFile = invObj.createIndex('validFile', validFile);
      expect(createdIndex).toEqual(newFile);
    });
  });

  describe('Search Index function', () => {
    it('should return ', () => {
      const newSearch = invObj.searchIndex(createdIndex, 'validFile', 'crayons', ['poem'], 'colour', ['not']);
      expect(searchResult).toEqual(newSearch);
    });
  });
});
