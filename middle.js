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
  // function declare middle which will take array as argument
  // it will return middle element in array in new array
  // for array with one or two elements, there is no middle
  // return an empty array
  // for array with odd number of elements an array containing single middle 
  // element should be returned
  // for array with even number of elements 
  // return an array with two elements in middle
  const middle = function(inputArray){
    const indexOfMiddleElement = Math.floor(inputArray.length / 2);
    if(inputArray.length <= 2){
      return [];
    }
   if(inputArray.length % 2 !== 0){
  return [inputArray[indexOfMiddleElement]];
    }
    else{
      return [inputArray[indexOfMiddleElement - 1],inputArray[indexOfMiddleElement]];
    }
  };

  console.log(middle([1])); // => []
  console.log(middle([1, 2])); // => []
  console.log(middle([1, 2, 3]));
  console.log(middle([1, 2, 3, 4, 5]));
  console.log(middle([1,2,3,4,5,6,7,8]));
assertArraysEqual(middle([1,2,3,4]), [1,2]);
assertArraysEqual(middle([]), [1,2]);
