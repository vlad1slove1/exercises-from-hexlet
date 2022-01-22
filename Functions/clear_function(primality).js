/*
Implement a function that checks if a given number is prime and prints 'yes' or 'no' to the screen.
Try to solve with clear function and divide logic from side effects (screen print).
*/

const solution = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const isPrime = (num) => {
  const result = solution(num) ? 'yes' : 'no';
  console.log(result);
};

isPrime(3);
