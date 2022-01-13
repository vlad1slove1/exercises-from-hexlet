import pick from 'lodash/pick.js';

/*
Implement a function that fills an object with data from another object
based on an allowed list of keys.
  Parameters:
    1) Given object;
    2) List of keys;
    3) New data to merge.
In the case when the list of keys is empty, you need to merge all the data completely.
*/

const object = {
  name: null,
  state: 'moderating',
};

const data = {
  name: 'Hexlet',
  state: 'published',
};

// Expected results

/*
fill(company, ['name'], data);
  {
    name: 'Hexlet',
    state: 'moderating',
  }
*/

/*
fill(company, [], data);
  {
    name: 'Hexlet',
    state: 'published',
  }
*/

const solution = (obj, keys, info) => {
  const keysLength = keys.length;
  if (keysLength === 0) {
    const mergedObj = Object.assign(obj, info);
    return mergedObj;
  }

  const hasKey = pick(info, keys);
  return Object.assign(obj, hasKey);
};

console.log(solution(object, ['name'], data));
