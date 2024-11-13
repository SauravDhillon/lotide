const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// Implement a function called eqArrays which takes
// in two arrays and return value of true or false
// based on perfect match
// eqArrays([1,2,3], [1,2,3]); // => true
// Use assertEqual to write test cases for various scenarios
// assertEqual(eqArrays([1,2,3], [1,2,3]), true);
// above should pass

const eqArrays = function(arr1, arr2){
// we have to compare values in arrays
for(i = 0; i < arr1.length; i++){
  for(j = 0; j < arr2.length; j++){
    if(arr1[i] === arr2[j]){
      return true;
    }else{
      return false;
    }
  }
}
};
console.log(eqArrays([1,2,3], [1,2,3])); // returns true
console.log(assertEqual(eqArrays([1,2,3], [1,2,3]), true));
console.log(assertEqual(eqArrays([1,2,3],["1",2,3]), false));