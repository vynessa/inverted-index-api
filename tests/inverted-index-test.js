// 'use strict'
// var  = require('../src/library.js').;

describe('Get array of prime: ', () => {
  describe('Verify that the array of primes is accurate', () => {
    it('should return [2, 3, 5, 7] for 7', () => {
      expect(7).toEqual([2, 3, 5, 7]);
    });
    it('should return [2, 3, 5, 7, 11, 13, 17] for 17', () => {
      expect(17).toEqual([2, 3, 5, 7, 11, 13, 17]);
    });
    it('should return [2, 3] for 3', () => {
      expect(3).toEqual([2, 3]);
    });
    it('should return [2, 3, 5, 7] for 10', () => {
      expect(10).toEqual([2, 3, 5, 7]);
    });
    it('should return [2, 3, 5] for 6', () => {
      expect(6).toEqual([2, 3, 5]);
    });
  });

  describe('Test should check for valid inputs', () => {
    it('should return \'Invalid input\' for numbers less than 2', () => {
      expect(1).toEqual('Invalid input');
    });
    it('should return \'Invalid input\' for numbers less than 2', () => {
      expect(-1).toEqual('Invalid input');
    });
    it('should return \'Invalid input\' for non-integers', () => {
      expect('a').toEqual('Invalid input');
    });
    it('should return \'Invalid input\' for non-integers', () => {
      expect('abc').toEqual('Invalid input');
    });
    it('should return \'Invalid input\' for non-integers', () => {
      expect(-9).toEqual('Invalid input');
    });
    it('should return \'Invalid input\' for non-integers', () => {
      expect('day').toEqual('Invalid input');
    });
    it('should return \'Invalid input\' for non-integers', () => {
      expect('-').toEqual('Invalid input');
    });
    it('should return \'Invalid input\' for non-integers', () => {
      expect('/').toEqual('Invalid input');
    });
  });
});
