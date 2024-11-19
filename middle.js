const assertArraysEqual = require("./assertArraysEqual");

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


module.exports = middle;