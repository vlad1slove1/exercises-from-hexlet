/*
Implement a function, that takes users collection and returns simple list of of nested objects,
for example their children. To make it easier, children list were given as array inside key.
Try to solve the task with .map() method and high order function
*/

export default (coll) => {
  const flattenChildren = coll.map(({ children }) => children);
  return flattenChildren.flat();
};

/*
Firstly we're creating new array of destructurised parameter { children } with .map() mtehod
and incremented high order function. Then we must .flat() the new array and return result.
*/
