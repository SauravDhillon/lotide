const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
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

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual((eqObjects(shirtObject, anotherShirtObject)),true); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // => false
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false