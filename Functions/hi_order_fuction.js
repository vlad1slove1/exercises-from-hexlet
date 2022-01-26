import sortBy from 'lodash/sortBy.js';

/*
Implement takeOldest() function, that takes a users collection and return the oldest. The number of
users to return is given by the second parameter. It has a dafault value = 1.
*/

// Edit this array to see different iterations
const users = [
  { name: 'Tirion', birthday: 'Nov 19, 1988' },
  { name: 'Sam', birthday: 'Nov 22, 1999' },
  { name: 'Rob', birthday: 'Jan 11, 1975' },
  { name: 'Sansa', birthday: 'Mar 20, 2001' },
  { name: 'Tisha', birthday: 'Feb 27, 1992' },
  { name: 'Chris', birthday: 'Dec 25, 1995' },
];

const solution = (coll, namesCount = 1) => {
  const sortedColl = sortBy(coll, ({ birthday }) => Date.parse(birthday));
  return sortedColl.slice(0, namesCount);
};

console.log(solution(users));
console.log(solution(users, 2));

/*
Solution uses high order function. Firstly we take _.sortBy() from lodash to sort elements of
given array. Second parameter of this function is destructurised key (birthday) from basic array.
To sort elements we must covert dates into time in miliseconds (Date.parse()). Next step is write
sorted array in constant. After we're returning sliced (arr.slice()) count of sorted array.
*/
