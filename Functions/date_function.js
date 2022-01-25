/* eslint-disable no-restricted-syntax */

/*
Implement a function that converts dates to arrays simple to read. Every date is given by array
[2001, 10, 18] in which first element is a year, second a month and third a day. Function must
take any number of parameters. If nothing was passed to the function, then it should return
empty array.
*/

// const firstArr = [];
// [];

// const secondArr = [1993, 3, 24];
// ['Sat Apr 24 1993'];

// const thirdArr = [[1993, 3, 24], [1997, 8, 12], [2001, 10, 18]];
// ['Sat Apr 24 1993', 'Fri Sep 12 1997', 'Sun Nov 18 2001'];

const firstSolution = (...dates) => {
  const newArr = [];

  for (const [year, month, day] of dates) {
    const checkDate = new Date(year, month, day);
    const formattedDate = checkDate.toDateString();
    newArr.push(formattedDate);
  }

  return newArr;
};

const secondSolution = (...dates) => {
  const newArr = [];

  for (const date of dates) {
    const checkDate = new Date(...date);
    const formattedDate = checkDate.toDateString();
    newArr.push(formattedDate);
  }

  return newArr;
};

export { firstSolution, secondSolution };

/*
Both solutions uses for...of loop. We're traversing given arrays and converting dates to simple
view. First solution solved with destructurisation, second solution made with spread operator.
*/
