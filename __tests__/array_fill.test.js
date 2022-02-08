import { firstSolution, secondSolution } from '../Arrays/array_fill.js';

let array;

beforeEach(() => {
  array = [1, 2, 3, 4];
});

test('value and and start / end items', () => {
  expect(firstSolution(array, '*', 1, 3)).toEqual([1, '*', '*', 4]);
  expect(secondSolution(array, '*', 1, 3)).toEqual([1, '*', '*', 4]);
});

test('value only', () => {
  expect(firstSolution(array, '*')).toEqual(['*', '*', '*', '*']);
  expect(secondSolution(array, '*')).toEqual(['*', '*', '*', '*']);
});

test('value and start item', () => {
  expect(firstSolution(array, '*', 4)).toEqual([1, 2, 3, 4]);
  expect(secondSolution(array, '*', 4)).toEqual([1, 2, 3, 4]);
});

test('value and ending item bigger that array length', () => {
  expect(firstSolution(array, '*', 0, 10)).toEqual(['*', '*', '*', '*']);
  expect(secondSolution(array, '*', 0, 10)).toEqual(['*', '*', '*', '*']);
});
