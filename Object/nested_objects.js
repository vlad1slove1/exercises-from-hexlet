/* eslint-disable no-restricted-syntax */

import has from 'lodash/has.js';

/*
Implement a function that retrieves a value from an object of any nesting depth
given the specified keys.
*/

// Edit this object to check different iterations
const data = {
  user: 'ubuntu',
  hosts: {
    0: {
      name: 'web1',
    },
    1: {
      name: 'web2',
      null: 3,
      active: false,
    },
  },
};

// Edit this arra to check different iterations
const givenArr = ['hosts', 1, 'name'];

const firstSolution = (obj, arr) => {
  let result = obj;

  for (const key of arr) {
    const hasObjKey = Object.prototype.hasOwnProperty.call(result, key);

    if (!hasObjKey) {
      return null;
    }
    result = result[key];
  }

  return result;
};

console.log(firstSolution(data, givenArr));

/*
First solution uses the hasOwnProperty() method, that returns a boolean
indicating whether the object has the specified property as its own property
(as opposed to inheriting it).
*/

const secondSolution = (obj, arr) => {
  let result = obj;

  for (const key of arr) {
    const hasObjKey = has(result, key);

    if (!hasObjKey) {
      return null;
    }
    result = result[key];
  }

  return result;
};

console.log(secondSolution(data, givenArr));

/*
Second solution uses .has() method from lodash library. Method is used to check
whether the path is a direct property of object or not. It returns true if path
exists, else it returns false.
*/
