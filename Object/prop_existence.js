/* eslint-disable no-restricted-syntax */

// This is example of checking for the existence of a property in object. Made by Hexlet teachers

// Create random array. This array contains several fruits
const bag = [
  'apple', 'banana', 'pear',
  'apricot', 'apple', 'banana',
  'apple', 'orange', 'pear',
];

const fruitsCount = (fruits) => {
  const result = {};

  for (const fruit of fruits) {
    // check propert for existence
    if (result[fruit] === undefined) {
      result[fruit] = 1;
    } else {
      result[fruit] += 1;
    }
  }
  return result;
};

console.log(fruitsCount(bag));
