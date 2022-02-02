import { strict as assert } from 'assert';
import solution from '../Functions/map_method.js';

const users = [
  {
    name: 'Tirion',
    children: [
      { name: 'Mira', birthday: '1983-03-23' },
    ],
  },
  { name: 'Bronn', children: [] },
  {
    name: 'Sam',
    children: [
      { name: 'Aria', birthday: '2012-11-03' },
      { name: 'Keit', birthday: '1933-05-14' },
    ],
  },
  {
    name: 'Rob',
    children: [
      { name: 'Tisha', birthday: '2012-11-03' },
    ],
  },
];

const result = [
  { name: 'Mira', birthday: '1983-03-23' },
  { name: 'Aria', birthday: '2012-11-03' },
  { name: 'Keit', birthday: '1933-05-14' },
  { name: 'Tisha', birthday: '2012-11-03' },
];

// checking for result
assert.deepStrictEqual(solution(users), result);
// checking for free massive
assert.deepStrictEqual(solution([]), []);

console.log('All tests passed!');
