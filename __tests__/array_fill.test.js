import { firstSolution } from '../Arrays/array_fill.js';

const fill = firstSolution();

let array;

beforeEach(() => {
  array = [1, 2, 3, 4];
});

test('value and and start / end items', () => {
  expect(fill(array, '*', 1, 3)).toEqual([1, '*', '*', 4]);
});

test('value only', () => {
  expect(fill(array, '*')).toEqual(['*', '*', '*', '*']);
});

test('value and start item', () => {
  expect(fill(array, '*', 4)).toEqual([1, 2, 3, 4]);
});

test('value and ending item bigger that array length', () => {
  expect(fill(array, '*', 0, 10)).toEqual(['*', '*', '*', '*']);
});
