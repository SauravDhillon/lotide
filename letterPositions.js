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
const letterPositions = function(sentence){
 const results = {};
 //access letter in sentence using for loop
 //we have to push letters and there index in results 
 //object index can be shown as array for multiple indexes
 for(let i = 0; i < sentence.length; i++){
  const character = sentence[i];
   // console.log(sentence[i]);
  if(character !== " "){
    if(results[character]){
      results[character].push(i);
 }else{
  results[character] = [i];
 } 
}
  
}
 return results;
};
console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("Howdy").y, [4]);