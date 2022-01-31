import get from 'lodash/get.js';

/*
Implement a fucntion, that takes a list of e-mails and returns e-mails count, which placed
on the free domains. The freeEmailDomains constant consists all free domains. Try to solve
with arr.map(), arr.filter(), arr.reduce() in a row.
*/

// Given list of e-mails
const emails = [
  'info@gmail.com',
  'info@yandex.ru',
  'info@hotmail.com',
  'mk@host.com',
  'support@hexlet.io',
  'key@yandex.ru',
  'sergey@gmail.com',
  'vovan@gmail.com',
  'vovan@hotmail.com',
];

// A list with free domains
const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

const solution = (arr) => arr
  .map((email) => {
    // splitting the string by '@'
    // destructuring email on [, domain]
    const [, domain] = email.split('@');
    return domain;
  })
  // checking, has the freeEmailDomains our domain
  // filtering the result
  .filter((domain) => freeEmailDomains.includes(domain))
  // reducing an arr by coincidence
  .reduce((acc, domain) => {
    // counting with _.get() from lodash
    // it returns a value at path of object
    const count = get(acc, domain, 0) + 1;
    return { ...acc, [domain]: count };
  }, {});

console.log(solution(emails));
