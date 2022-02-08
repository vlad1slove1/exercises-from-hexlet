/* eslint-disable no-param-reassign */

/*
Implement a function, that takes an array as argument and fills it with given value
from start index (inclusive) to last index (not inclusive). Function mutates default coll.
*/

/* Parameters explanation:
    function(coll, value, start, end)
      coll - given array
      value - select your own value (default '*')
      start - starting index (default = 0)
      end - last index (default = coll.length)
*/

const firstSolution = (coll, value, start = 0, end = coll.length) => {
  const collLength = coll.length;
  // if start is bigger than array's length, function returns default arr
  if (start >= collLength) {
    return coll;
  }

  // if end is bigger that array's length, function is fills whole array by value
  if (end > collLength) {
    coll.fill(value, 0, collLength);
    return coll;
  }

  // else returning filled array
  return coll.fill(value, start, end);
};

const secondSolution = (coll, value, start = 0, end = coll.length) => {
  const collLength = coll.length;
  const normalizedStart = start > collLength ? end : start;
  const normalizedEnd = end > collLength ? collLength : end;
  for (let i = normalizedStart; i < normalizedEnd; i += 1) {
    coll[i] = value;
  }
  return coll;
};

export { firstSolution, secondSolution };
