import path from 'path';

/*
Implement a function, that takes the tree as an object and substring as parameters and returns
an array of files, which consists substring with the full path.
Example: findFilesByName(tree, 'co') => ['/etc/nginx/nginx.conf', '/etc/consul/config.json']
*/

const findFilesByName = (coll, substring) => {
  const iter = (node, ancestor) => {
    // creating new variable 'ancestor' as an accumulator
    const { name } = node;
    const { children } = node;
    const { type } = node;
    // add ancestor and node name to path
    const newAncestor = path.join(ancestor, name);

    // if node is file and includes substring, then return current path
    if (type === 'file') {
      return name.includes(substring) ? newAncestor : [];
    }

    // .flatMap method returns an array.
    return children.flatMap((child) => iter(child, newAncestor));
  };

  return iter(coll, '');
};

export default findFilesByName;
