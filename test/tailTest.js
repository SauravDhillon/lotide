// const tail = require("../tail");
// const assertEqual = require("../assertEqual");
// const arr1 = ["Hello", "Lighthouse", "Labs"];
// const result1 = tail(arr1); // should return ["Lighthouse", "Labs"]
// const arr2 = ["Hello"];
// const result2 = tail(arr2);
// const arr3 = [];
// const result3 = tail(arr3);
// assertEqual(result1.length, 2); // => will always fail!
// assertEqual(result2.length, 0);
// assertEqual(result3.length, 0);
const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail" , () => {
  it("return ['Lighthouse','Labs'] for tail of ['Hello','Lighthouse','Labs'] array", () => {
     assert.deepEqual(tail(['Hello','Lighthouse','Labs']),['Lighthouse','Labs']);
  });
  it("return [] for tail of ['Hello'] array", () => {
    assert.deepEqual(tail(['Hello']),[]);
 });
 it("return [] for tail of [] array", () => {
  assert.deepEqual(tail([]),[]);
});
});

