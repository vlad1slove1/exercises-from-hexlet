#!/usr/bin/env node
import getGirlFriends from '../Functions/filter_method.js';

const users = [
  {
    name: 'Tirion',
    friends: [
      { name: 'Mira', gender: 'female' },
      { name: 'Ramsey', gender: 'male' },
    ],
  },
  { name: 'Bronn', friends: [] },
  {
    name: 'Sam',
    friends: [
      { name: 'Aria', gender: 'female' },
      { name: 'Keit', gender: 'female' },
    ],
  },
  {
    name: 'Rob',
    friends: [
      { name: 'Taywin', gender: 'male' },
    ],
  },
];

const females = [
  { name: 'Mira', gender: 'female' },
  { name: 'Aria', gender: 'female' },
  { name: 'Keit', gender: 'female' },
];

test('getGirlFriends', () => {
  expect(getGirlFriends(users)).toEqual(expect.arrayContaining(females));
});
