// Implement a function called eqArrays which takes
// in two arrays and return value of true or false
// based on perfect match
// eqArrays([1,2,3], [1,2,3]); // => true
// Use assertEqual to write test cases for various scenarios
// assertEqual(eqArrays([1,2,3], [1,2,3]), true);
// above should pass

const eqArrays = function(arr1, arr2){
// we have to compare values in arrays
if(arr1.length !== arr2.length){
  return false;
}
for(let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      return false;
    }
}
return true;
};

module.exports = eqArrays;