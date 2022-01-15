/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import isObject from 'lodash/isObject.js';

/*
Implement a function that performs a deep copy of given object with nested objects. Try to solve
exercise without _.cloneDeep() from lodash and JSON methods
*/

// Edit this object to see all iterations
const data = {
  key: 'value',
  key2: {
    key: 'innerValue',
    innerKey: {
      anotherKey: 'anotherValue',
    },
  },
};

const firstSolution = (obj) => {
  const result = {};

  for (const key in obj) {
    const isKeyObject = isObject(key);

    if (isKeyObject) {
      result[key] = firstSolution(obj[key]);
    } else {
      result[key] = obj[key];
    }
  }

  return result;
};

console.log(firstSolution(data).key2 === data.key2);
console.log(firstSolution(data));

/*
First solution uses for...in loop, which is not reccomended to use. We need to traverse the
original object and copy its data to another object. If the value of some property is an object,
then the function is restarted recursively.
*/

const secondSolution = (obj) => {
  const result = {};
  const entries = Object.entries(obj);

  for (const [key, value] of entries) {
    const isKeyObject = isObject(obj[key]);
    if (isKeyObject) {
      result[key] = secondSolution(obj[key]);
    } else {
      result[key] = value;
    }
  }

  return result;
};

console.log(secondSolution(data).key2 === data.key2);
console.log(secondSolution(data));

/*
Second solution uses Object.entries() method and loop for...of. We're traversing through the keys
of original object. If the value of some property is an object, then the function is restarted
recursively.
*/
