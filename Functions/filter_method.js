/*
Implement a function, that takes the collection of users and returns simple list of users
girlfriends (without saving the keys). Every user friends stored as an array inside of
friends key. Friend gender is available by gender key as 'male' and 'female'.
*/

const getGirlFriends = (coll) => {
  const sortedFriends = coll.flatMap(({ friends }) => friends);
  const sortedFemales = sortedFriends.filter((friend) => friend.gender === 'female');

  return sortedFemales;
};

export default getGirlFriends;

/*
First of all we must get a mapped array by 'friends' key. Use destructuration and combined
method .flatMap(). Next step is filtering an array by key property (is key.prop === 'female').
.filter() method includes the only arrays, that returns true. Then we're returning new array.
*/
