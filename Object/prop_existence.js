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
First solution travers the array, this function takes the result object,
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
    // console.log(result);
  }

  return result;
};

console.log(secondSolution(bag));

/*
Second solution uses bult-in hasOwnProperty() method, that returns a boolean indicating
whether the object has the specified property as its own property.
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
    // console.log(result);
  }

  return result;
};

console.log(thirdSolution(bag));

/*
Third solution is better to check for the existence of the key, and uses the lodash library.
Lodash contains has.js function, which haven't the disadvantages of built-in methods.
*/

const fourthSolution = (fruits) => {
  const result = {};

  for (const fruit of fruits) {
    // check property for existence
    result[fruit] = (result[fruit] ?? 0) + 1;
    // console.log(result);
  }

  return result;
};

console.log(fourthSolution(bag));

/*
Fourth solution uses the nullish coalescing operator (??). It allows you to set a default
value when it is null or undefined.
*/
