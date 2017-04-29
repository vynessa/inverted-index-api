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
        expect(10).toEqual([2, 3, 5, 7 ]);
      });
      it('should return [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79] for 80', () => {
        expect(80).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79]);
      });

      it('should return [2, 3, 5] for 6', () => {
        expect(6).toEqual([2, 3, 5]);
      });

      it('should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97] for 100', () => {
        expect(100).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
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