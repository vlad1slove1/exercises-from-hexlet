/* eslint-disable no-restricted-syntax */

import has from 'lodash/has.js';

/*
Make a function that forms another object from the passed object that includes
only the specified properties

  Parameters:
    1) Original object
    2) Array of property names
*/

// edit this object to see all matches
const data = {
  user: 'ubuntu',
  cores: 4,
  os: 'linux',
};

// edit this const to see different iterations
const props = ['user', 'name', 'os'];

const firstSolution = (obj, arr) => {
  const result = {};

  const entries = Object.entries(obj);
  // console.log(entries);

  for (const [key, value] of entries) {
    for (const prop of arr) {
      // console.log(prop);
      if (key === prop) {
        result[key] = value;
      }
    }
  }

  return result;
};

console.log(firstSolution(data, props));

/*
The first solution is made on the built-in loop for(). Split object on arrays with the keys and
values by Object.entries() method. Then traversing throug the keys and compare them with properties
of given massive (const props). After we're forming new object (result = {}) and adding all matches
to it.
*/

const secondSolution = (obj, arr) => {
  const result = {};

  for (const key of arr) {
    if (has(obj, key)) {
      result[key] = obj[key];
    }
  }

  return result;
};

console.log(secondSolution(data, props));

/*
Second solution is made with has() function from lodash library.
*/
