const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");
//console.log(eqArrays([1,2,3], [1,2,3])); // returns true
console.log(assertEqual(eqArrays([1,2,3], [1,2,3]), true));
console.log(assertEqual(eqArrays([1,2,3],["1",2,3]), false));
console.log(assertEqual(eqArrays([1,2,3,4],["1",2,3]), false));
console.log(assertEqual(eqArrays([],["1",2,3]), false));