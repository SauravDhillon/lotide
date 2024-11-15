const assertArraysEqual = function(arr3, arr4){
  if (eqArrays(arr3, arr4)) {
    console.log(`✅✅✅ Assertion Passed: ${arr3} === ${arr4}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr3} !== ${arr4}`);
  }
};
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
const words = ["ground","control","to","major","tom"];

//const control = words.map((word) => 
 // {console.log("words are, " + word)});
const map = function (array, callback) {
  const results = [];
  for (let item of array){
   // console.log("items BEFORE:", item);
   // console.log("items AFTER:", callback(item));
   // console.log("---")
   results.push(callback(item));
  }
  return results;
};
const results1 = map(words, (word) => word[0]);
console.log(results1);

const cars = ["Honda","Tesla","Toyota","Mercedes"];
const results2 = map(cars, (cars) => cars[0]);
console.log(results2);
assertArraysEqual(results2 , ['H','T','T','M']);