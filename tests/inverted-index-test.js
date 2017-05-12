import validFile from '../fixtures/validFile.json';
import invalidFile from '../fixtures/invalidFile.json';
import emptyFile from '../fixtures/emptyFile.json';
import malformedFile from '../fixtures/malformedFile.json';
import InvertedIndex from '../src/inverted-index';

// Create an instance of InvertedIndex class
const invObj = new InvertedIndex();
const fileContent = invObj.validateFile('validFile.json');
const invalidContent = invObj.validateFile('hello.txt');

// Testspec with fileSpec parameters passed in
const validTestSpec = [{
  filename: 'validFile.json',
  fileContent: [{
    'title': 'Queen Premier',
    'text': 'Is he to go up? Yes, he is to go up.'
  },
  {
    'title': 'Poem',
    'text': 'Broken crayons still colour.'
  }]
}];

const invalidTestSpec = [{
  filename: 'invalidFile.json',
  fileContent: [{}]
}];

describe('Inverted Index Suite:', () => {
  describe('Inverted Index Method checker', () => {
    it('should have \'validateFile\' as a method', () => {
      expect(invObj.validateFile).toBeDefined('function');
    });

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

    it('should have `flattenSearchArray` as a method', () => {
      expect(InvertedIndex.flattenSearchArray).toBeDefined('function');
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

  describe('Validate file function', () => {
    it('should return a valid json', () => {
      expect([{
        'title': 'Queen Premier',
        'text': 'Is he to go up? Yes, he is to go up.'
      },
      {
        'title': 'Poem',
        'text': 'Broken crayons still colour.'
      }
      ]).toEqual(fileContent);
    });

    it('should return \'Invalid JSON\' for Invalid files', () => {
      expect(invalidContent).toEqual('Invalid Json');
    });
  });

  describe('Inverted index JSON Validation method', () => {
    // Parameters for isValid method tests
    const validBook = InvertedIndex.isValid(validFile);
    const invalidBook = InvertedIndex.isValid(invalidFile);
    const malformedBook = InvertedIndex.isValid(malformedFile);
    const emptyBook = InvertedIndex.isValid(emptyFile);

    it('should return \'Valid JSON\' for Valid json types', () => {
      expect(validBook).toEqual('Valid JSON');
    });

    it('should return \'Invalid JSON\' for invalid JSON type', () => {
      expect(invalidBook).toEqual('Invalid Json');
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
      let newBook = [{
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
      let getWords = ['broken',
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
        'yes'
      ];

      const uniqueWords = ['broken',
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
        'yes'
      ];

      getWords = InvertedIndex.removeDuplicates(getWords);
      expect(uniqueWords).toEqual(getWords);
    });
  });

  describe('Tokenize function', () => {
    it('should return in an array tokens for each file', () => {
      // Parameter to be used to test for correctness of the tokenize method
      let newBook = [{
        'title': 'Alice in Wonderland',
        'text': 'I am not as lazy as Alice'
      },
      {
        'title': 'Lady',
        'text': 'The lady is 50 years old. SHe has a child'
      }
      ];

      // Expected result after newBook is passed into tokenize function
      const result = ['50',
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
        'years'
      ];

      newBook = InvertedIndex.tokenize(newBook);
      expect(result).toEqual(newBook);
    });
  });

  describe('Populate Index function', () => {
    it('should return error message if JSON file is `Invalid`, `Malformed` or `empty` file.', () => {
      expect(invObj.createIndex(invalidTestSpec)).toEqual('Invalid JSON');
    });

    it('should return valid createIndex obj', () => {
      expect({
        'validFile.json': {
          go: [ 0 ],
          he: [ 0 ],
          is: [ 0 ],
          premier: [ 0 ],
          queen: [ 0 ],
          to: [ 0 ],
          up: [ 0 ],
          yes: [ 0 ],
          broken: [ 1 ],
          colour: [ 1 ],
          crayons: [ 1 ],
          poem: [ 1 ],
          still: [ 1 ]
        }
      }).toEqual(invObj.createIndex(validTestSpec));
    });

    it('should return in an object a file name as key, and accurate index for every word\'s  occurence in a book', () => {
      // const newFile = invObj.createIndex('validFile', validFile);
      // expect(createdIndex).toEqual(newFile);
      expect({
        'validFile.json': {
          go: [ 0 ],
          he: [ 0 ],
          is: [ 0 ],
          premier: [ 0 ],
          queen: [ 0 ],
          to: [ 0 ],
          up: [ 0 ],
          yes: [ 0 ],
          broken: [ 1 ],
          colour: [ 1 ],
          crayons: [ 1 ],
          poem: [ 1 ],
          still: [ 1 ]
        }
      }).toEqual(invObj.createIndex(validTestSpec));
    });
  });

  describe('Search Index function', () => {
    // Test Parameter for SearchIndex test
    const createdIndex = {
      validFile: {
        go: [ 0 ],
        he: [ 0 ],
        is: [ 0 ],
        premier: [ 0 ],
        queen: [ 0 ],
        to: [ 0 ],
        up: [ 0 ],
        yes: [ 0 ],
        broken: [ 1 ],
        colour: [ 1 ],
        crayons: [ 1 ],
        poem: [ 1 ],
        still: [ 1 ]
      }
    };

    const searchResult = {
      'validFile.json': {
        crayons: [ 1 ],
        poem: [ 1 ],
        colour: [ 1 ]
      }
    };

    it('should return the correct index for every search term', () => {
      const newSearch = invObj.searchIndex(createdIndex, 'validFile', 'crayons', ['poem'], 'colour', ['not']);
      expect(searchResult).toEqual(newSearch);
    });

    it('should return false if search not found in the file', () => {
      const newSearch = invObj.searchIndex(validTestSpec, 'validFile', 'air', 'bear', ['care']);
      expect(newSearch).toEqual(false);
    });
  });
});
