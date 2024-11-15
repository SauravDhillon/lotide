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
const assertArraysEqual = function(arr3, arr4){
  if (eqArrays(arr3, arr4)) {
    console.log(`✅✅✅ Assertion Passed: ${arr3} === ${arr4}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr3} !== ${arr4}`);
  }
};
const eqObjects = function(obj1, obj2){
  // function will compare objects for perfect match
  // returns true or false
  // two objects are equal when 
  // they have same no. of keys
  // value for each key in one object is same as value for 
  // that same key in other object
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
   
    if(keys1.length !== keys2.length){
      return false;
    }
    for(let key of keys1){
      // we will compare values of two objects to see if it matches
      if(Array.isArray(obj1[key]) && Array.isArray(obj2[key])){
        if(!eqArrays(obj1[key], obj2[key])){
          return false;
        }
      }
      else if(obj1[key] !== obj2[key]){
        return false;
      }
      }
    return true;
    
  };
  // Hello
  const assertObjectsEqual = function (actual, expected) {
    const inspect = require("util").inspect;
    //console.log(`Example label: ${inspect(actual)}`);
    if (eqObjects(actual, expected)) {
      console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
  };
  const cars1 = {
    company: "Honda",
    type:"sedan",
    model:"Civic",
    manufacturedIn : ["Japan","India","China"]
  };
  const cars2 = {
    company: "Honda",
    type:"sedan",
    model:"Civic",
    manufacturedIn : ["Japan","India","China"]
  };
  assertObjectsEqual(cars1,cars2);