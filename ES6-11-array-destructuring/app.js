// Destructuring
// faster/easier way to access/unpack values from arrays
// objects into variables
// Arrays

const fruits = ['orange', 'banana', 'lemon'];
const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];

const orange = fruits[0];
const banana = fruits[1];
const lemon = fruits[2];
console.log(orange, banana, lemon);

// everything inside square brackets are indexes
// susan will be undefined, as it's beyond the end of the array
// const [john, peter, bob, anna, kelly, susan] = friends;
// console.log(john, peter, bob, anna, kelly, susan);

// don't have to use the same names.  In this case enemy will contain the value 'john'
// const [john, peter, bob, anna, kelly, susan] = friends;
// console.log(john, peter, bob, anna, kelly, susan);

// if you leave one empty, it will skip it - in this case enemy will be the 3rd value in the array (bob), bob will be the 4th (anna), and susan will be the 5th (kelly)
const [john, , enemy, bob, susan] = friends;
console.log(john, enemy, bob, susan);
