/*
Implement a function with spread operator, that creates a company object and returns it.
To create a company, only one property is required - the name of the company. Other
properties are added only if they exist.
  Parameters:
    1) Name;
    2) Object with additional properties;

Given companies also have two properties with default values:
  1) state - moderating;
  2) createdAt - current date;
*/

/*
A few test:

solution('Hexlet');
  {
    name: 'Hexlet',
    state: 'moderating',
    createdAt: <current date>
  }

solution('Hexlet', { website: 'hexlet.io', state: 'published' });
  {
    name: 'Hexlet',
    website: 'hexlet.io',
    state: 'published',
    createdAt: <current date>
  }
*/

const solution = (name, obj = {}) => {
  const currentDate = Date.now();
  const newObj = {
    name,
    state: 'moderating',
    createdAt: currentDate,
    ...obj,
  };

  return newObj;
};

console.log(solution('Hexlet'));
console.log(solution('Hexlet', { website: 'hexlet.io', state: 'published' }));
