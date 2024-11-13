const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};
const arr1 = ["Hello", "Lighthouse", "Labs"];
const result = tail(arr1); // should return ["Lighthouse", "Labs"]
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
console.log(arr1);