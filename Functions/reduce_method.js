/*
Implement a function that groups an object by property. Function takes 2 arguments (1 - given
collection, 2 - name of property for filterig). The function returns an object. Use without
_.groupBy() form lodash.
*/

// Edit this collection to see all iterations
const students = [
  { name: 'Tirion', class: 'B', mark: 2 },
  { name: 'Keit', class: 'A', mark: 3 },
  { name: 'Ramsey', class: 'A', mark: 4 },
  { name: 'Bronn', class: 'B', mark: 3 },
  { name: 'Sam', class: 'A', mark: 2 },
  { name: 'Aria', class: 'B', mark: 5 },
  { name: 'Keit', class: 'B', mark: 4 },
  { name: 'Rob', class: 'B', mark: 4 },
  { name: 'Taywin', class: 'A', mark: 5 },
];

const firstSolution = (arr, prop) => {
  const preparedColl = (obj, student) => {
    const key = student[prop];
    const hasObjKey = Object.prototype.hasOwnProperty.call(obj, key);

    // if property isn't created, then create it
    if (!hasObjKey) {
      const newArr = obj;
      newArr[key] = [];
    }
    // adding a value to object
    obj[key].push(student);
    // returning an object for the next step
    return obj;
  };

  return arr.reduce(preparedColl, {});
};

console.log(firstSolution(students, 'mark'));

const secondSolution = (objects, key) => objects.reduce((acc, object) => {
  // taking a key from every object
  // a groups container is an array
  const groupName = object[key];
  // the nullish coalescing operator (??) returns an empty array, if the container is empty
  const group = acc[groupName] ?? [];
  // returning a new object of accumulator
  return { ...acc, [groupName]: group.concat(object) };
  // square brackets are needed to specify the group name as a key
  // the old accumulator is destructured, a new array with data is written for the current group
}, {});

console.log(secondSolution(students, 'mark'));
