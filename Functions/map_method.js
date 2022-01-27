/*
Implement a function, that takes users collection and returns simple list of of nested objects,
for example their children. To make it easier, children list were given as array inside key.
Try to solve the task with .map() method and high order function
*/

// Edit this collection to see all iterations
const users = [
  {
    name: 'Tirion',
    children: [
      { name: 'Mira', birthday: '1983-03-23' },
    ],
  },
  { name: 'Bronn', children: [] },
  {
    name: 'Sam',
    children: [
      { name: 'Aria', birthday: '2012-11-03' },
      { name: 'Keit', birthday: '1933-05-14' },
    ],
  },
  {
    name: 'Rob',
    children: [
      { name: 'Tisha', birthday: '2012-11-03' },
    ],
  },
];

const solution = (coll) => {
  const flattenChildren = coll.map(({ children }) => children);
  return flattenChildren.flat();
};

console.log(solution(users));

/*
Firstly we're creating new array of destructurised parameter { children } with .map() mtehod
and incremented high order function. Then we must .flat() the new array and return result.
*/
