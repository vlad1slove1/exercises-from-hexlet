/*
Implement a function, twhich takes the image as two-dimensional array and returns two times
enlarged array
*/

const image = [
  ['*', '*', '*', '*'],
  ['*', ' ', ' ', '*'],
  ['*', ' ', ' ', '*'],
  ['*', '*', '*', '*'],
];

// duplicating an array in vertical using arr.flatMap()
const duplicateArr = (items) => items.flatMap((item) => [item, item]);

// creating new function in which we call the first function
const enlargedArr = (arr) => {
  const horizontallyStretched = arr.map(duplicateArr);
  return duplicateArr(horizontallyStretched);
};

console.log(enlargedArr(image));
