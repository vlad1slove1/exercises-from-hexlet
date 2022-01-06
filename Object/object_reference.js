/* eslint-disable no-restricted-syntax */
/*
Реализуйте и экспортируйте по умолчанию функцию, которая сравнивает объекты по совпадению данных,
а не по ссылкам. Эта функция принимает на вход две компании и возвращает true, если их структура
одинаковая, и false в обратном случае. Проверка должна проходить по свойствам name, state, website.
*/

/*
EXAMPLES

const company1 = { name: 'Hexlet', state: 'moderating', website: 'https://hexlet.io' };
const company2 = { name: 'CodeBasics', state: 'published', website: 'https://code-basics.com' };
is(company1, company2); // false

const company1 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
const company2 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
is(company1, company2); // true
*/

const isPropsEqual = (company1, company2) => {
  const keys = ['name', 'state', 'website'];
  for (const key of keys) {
    if (company1[key] !== company2[key]) {
      return false;
    }
  }

  return true;
};

export default isPropsEqual;
