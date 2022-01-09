/* eslint-disable no-restricted-syntax */

// There are few solutions to traverse the properties through the Object.

// Create random object. For example, my info:

const myInfo = {
  name: 'Vlad',
  age: 27,
  sex: 'male',
};

const firstSolution = (obj) => {
  for (const prop in obj) {
    if (Object.hasOwnProperty.call(obj, prop)) {
      console.log(`obj.${prop} = ${obj[prop]}`);
    }
  }
};

firstSolution(myInfo);

/*
Looping over objects with a for in loop will include properties that are inherited
through the prototype chain. This behavior can lead to unexpected items in your for loop
*/

const secondSolution = (obj) => {
  const newArr = Object.keys(obj);
  // console.log(newArr);

  for (const key of newArr) {
    console.log(obj[key]);
  }
};

secondSolution(myInfo);

/*
The Object.keys() method returns an array of a given object's own enumerable property names,
iterated in the same order that a normal loop would.
*/

// If the keys are not used during the traversal, then you can immediately get an array
// of object property values

const thirdSolution = (obj) => {
  const objValues = Object.values(obj);
  // console.log(objValues);

  for (const value of objValues) {
    console.log(value);
  }
};

thirdSolution(myInfo);

/*
The Object.values() method returns an array of a given object's own enumerable property values,
in the same order as that provided by a for...in loop. (The only difference is that a for...in
loop enumerates properties in the prototype chain as well.)
*/

// Example that immediately returns the keys and values of the object. Each element
// will be itself an array containing the key and the value - [key, value].

const fourthSolution = (obj) => {
  const entries = Object.entries(obj);

  for (const [key, value] of entries) {
    console.log(`${key}: ${value}`);
  }
};

fourthSolution(myInfo);

/*
The Object.entries() method returns an array of a given object's own enumerable
string-keyed property [key, value] pairs.
*/
