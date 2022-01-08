/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */

import has from 'lodash/has.js';

// There are examples of checking for the existence of a property in object. Made by Hexlet teachers

// Create random array. This array contains several fruits
const bag = [
  'apple', 'banana', 'pear',
  'apricot', 'apple', 'banana',
  'apple', 'orange', 'pear',
];

const firstSolution = (fruits) => {
  const result = {};

  for (const fruit of fruits) {
    // check property for existence
    if (result[fruit] === undefined) {
      result[fruit] = 1;
    } else {
      result[fruit] += 1;
    }
    // console.log(result);
  }
  return result;
};

console.log(firstSolution(bag));

/*
While traversing the array, this function takes the result object,
extracts the desired property from it, and increments the value by one.
*/

const secondSolution = (fruits) => {
  const result = {};

  for (const fruit of fruits) {
    // check property for existence
    if (result.hasOwnProperty(fruit)) {
      result[fruit] += 1;
    } else {
      result[fruit] = 1;
    }
  }

  return result;
};

console.log(secondSolution(bag));

/*
The hasOwnProperty() method returns a boolean indicating whether the object
has the specified property as its own property (as opposed to inheriting it).
*/

const thirdSolution = (fruits) => {
  const result = {};

  for (const fruit of fruits) {
    // check property for existence
    if (has(result, fruit)) {
      result[fruit] += 1;
    } else {
      result[fruit] = 1;
    }
  }

  return result;
};

console.log(thirdSolution(bag));

/*
Therefore, it is better to check for the existence of the key using the lodash library.
It contains the has.js function, which haven't the disadvantages of built-in methods.
*/
