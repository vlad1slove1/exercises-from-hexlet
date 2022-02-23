import findFilesByName from '../Trees/findFilesByName.js';

const tree = {
  name: '/',
  children: [{
    name: 'etc',
    children: [{
      name: 'apache',
      children: [],
      meta: {},
      type: 'directory',
    }, {
      name: 'nginx',
      children: [{
        name: 'nginx.conf',
        meta: {},
        type: 'file',
      }],
      meta: {},
      type: 'directory',
    }, {
      name: 'consul',
      children: [{
        name: 'config.json',
        meta: {},
        type: 'file',
      }, {
        name: 'data',
        children: [],
        meta: {},
        type: 'directory',
      }],
      meta: {},
      type: 'directory',
    }],
    meta: {},
    type: 'directory',
  }, {
    name: 'hosts',
    meta: {},
    type: 'file',
  }, {
    name: 'resolve',
    meta: {},
    type: 'file',
  }],
  meta: {},
  type: 'directory',
};

test('findFilesByName', () => {
  expect(findFilesByName(tree, 'co')).toEqual([
    '/etc/nginx/nginx.conf',
    '/etc/consul/config.json',
  ]);
});

test('findFilesByName 2', () => {
  expect(findFilesByName(tree, 'toohard')).toEqual([]);
});
