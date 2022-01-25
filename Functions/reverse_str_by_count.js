/*
Implement a nested function takeLast(), that returns reversed last n count of chars. If string
is empty, or given count is bigger than string length, then return null.
*/

// run('');       // null
// run('cb');     // null
// run('power');  // rewo
// run('hexlet'); // telx

const run = (text) => {
  const takeLast = (str, count) => {
    if (text.length === 0 || text.length < count) {
      return null;
    }

    const reversedStr = str.split('').reverse().join('');
    let lastCharsByCount = '';

    for (let i = 0; i < count; i += 1) {
      lastCharsByCount += reversedStr[i];
    }

    return lastCharsByCount;
  };

  return takeLast(text, 4);
};

console.log(run('power'));

/*
Solution uses nested function takeLast(), that calls itself. Firstly we're converting string
into array, reverse all elements and convert them back to the string. Using the for() loop
traversing through the chars till given count. Write result into variable.
*/
