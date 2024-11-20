// const middle = require("../middle");
// const assertArraysEqual = require('../assertArraysEqual');
// // console.log(middle([1])); // => []
// // console.log(middle([1, 2])); // => []
// // console.log(middle([1, 2, 3]));
// // console.log(middle([1, 2, 3, 4, 5]));
// // console.log(middle([1,2,3,4,5,6,7,8]));
// //assertArraysEqual(middle([1,2,3,4]), [1,2]);
// //assertArraysEqual(middle([]), [1,2]);
// assertArraysEqual(middle([1,2,3,4,5]), [3]);
// assertArraysEqual(middle([1,5,4,3]), [5,4]);

const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle" , () => {
  it("should return [3] for the middle of [1,2,3,4,5] array", () => {
    assert.deepEqual(middle([1,2,3,4,5]),[3]);
  });
  it("should return [5,4] for the middle of [1,5,4,3] array", () => {
    assert.deepEqual(middle([1,5,4,3]),[5,4]);
  });
})