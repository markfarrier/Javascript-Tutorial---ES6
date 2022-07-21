// Spread Operator ...
// Allows an iterable to spread/expand individually inside reciever
// Split into single items and copy them.
// copying - NOT referencing them
// so they're not being mutated

// since strings are an array of characters, using the spread operator here will split it up into characters, and return a 5-item array with ['u','d','e','m','y']
const udemy = 'udemy';
const letters = [...udemy];
console.log(letters);

const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna'];
const bestFriend = 'arnold';

// will produce an array of 3 items
// first item will be the boys array (i.e. a nested array)
// second item will be the girls array
// third item will be the bestFriend string
// const friends = [boys, girls, bestFriend];
// console.log(friends);

const friends = [...boys, bestFriend, ...girls];
console.log(friends);

// const newFriends = [...friends];
// reference
const newFriends = friends;
// below value assignment will effect both friends and newFriends as they share a common reference (if value of newFriends is not set with the spread operator, which would copy the value and not reference it)
// uncomment the spread operator assignment to get the different functionality
newFriends[0] = 'karina';
console.log(newFriends);
console.log(friends);
