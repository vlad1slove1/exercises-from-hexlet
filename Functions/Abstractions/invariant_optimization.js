/*
Implement an abstraction for working with rational numbers that includes the following functions:

  1. The makeRational() constructor takes a numerator and a denominator as input and returns an
  object.
  2. selector getNumer() - returns the numerator
  3. selector getDenom() - returns the denominator
  4. Addition add() - Adds the given rational numbers
  5. sub() subtraction - finds the difference between two rational numbers
*/

// to optimize our numerator and denominator, gcd of this numbers is needed
const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : Math.abs(b));

const makeRational = (numer, denom) => {
  // normalizing data inside constructor-function makeRational()
  const gcd = getGcd(numer, denom);
  const normalizedNumer = numer / gcd;
  const normalizedDenom = denom / gcd;

  return { numer: normalizedNumer, denom: normalizedDenom };
};

// first selector to get optimized numerator
const getNumer = (rational) => rational.numer;
// second selector to get optimized denominator
const getDenom = (rational) => rational.denom;

// to solve summation we must find common denominator
// then we can add numerators
const add = (rat1, rat2) => (
  makeRational(
    getNumer(rat1) * getDenom(rat2) + getNumer(rat2) * getDenom(rat1),
    getDenom(rat1) * getDenom(rat2),
  )
);

// to solve summation we must find common denominator
// then we can subtract numerators
const sub = (rat1, rat2) => (
  makeRational(
    getNumer(rat1) * getDenom(rat2) - getNumer(rat2) * getDenom(rat1),
    getDenom(rat1) * getDenom(rat2),
  )
);

export {
  makeRational,
  getNumer,
  getDenom,
  add,
  sub,
};

/*
Attention! the solution doesn't provide the sign-preservation condition for a negative
denominator. In the current solution and in the tests, the denominator is greater than 0
*/
