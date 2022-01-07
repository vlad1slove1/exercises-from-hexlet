/* eslint-disable no-unused-vars */

// Реализовать функцию, которая принимает на вход имя сайта и возвращает информацию о нем:

// Если домен передан без указания протокола,
// то по умолчанию берется http
const first = 'yandex.ru';
// {
//   scheme: 'http',
//   name: 'yandex.ru',
// }

const second = 'https://hexlet.io';
// {
//   scheme: 'https',
//   name: 'hexlet.io',
// }

const third = 'http://google.com';
// {
//   scheme: 'http',
//   name: 'google.com',
// }

const getInfo1 = (site) => {
  const parts = site.split('://');
  const name = parts[parts.length - 1];

  // console.log(parts);
  // console.log(name);

  let scheme;
  let info;

  if (parts.length === 1) {
    info = { scheme: 'http', name };
  } else {
    const firstPart = parts[0];
    scheme = firstPart;
    info = { scheme, name };
  }
  // console.log(parts.length);

  return info;
};

const getInfo2 = (site) => {
  let scheme = '';
  if (site.startsWith('https://')) {
    scheme = 'https';
  // else if другие протоколы
  } else {
    scheme = 'http';
  }

  const name = site.replace(`${scheme}://`, '');

  return { scheme, name };
};
