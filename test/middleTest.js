const middle = require("../middle");
const assertArraysEqual = require('../assertArraysEqual');
// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []
// console.log(middle([1, 2, 3]));
// console.log(middle([1, 2, 3, 4, 5]));
// console.log(middle([1,2,3,4,5,6,7,8]));
assertArraysEqual(middle([1,2,3,4]), [1,2]);
assertArraysEqual(middle([]), [1,2]);
assertArraysEqual(middle([1,2,3,4,5]), [3]);
assertArraysEqual(middle([1,5,4,3]), [5,4]);
