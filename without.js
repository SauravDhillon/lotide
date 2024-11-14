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
  
  
//This function should take in a source array and
//itemsToRemove array. It should return a new array
// with only those elements from source that are not
// present in the itemsToRemove array.

//Here are a couple examples, but please don't limit your testing to just
//scenarios:

  const without = function(sourceArray, itemsToRemove){
   let finalArray = [];

//we need to have access to baskets 1 and 2
//const without = function(basket1, basket2){
//step 2 once we access values we will compare them to see which is not matching
//step 3 we will add unmatching candies to empty basket 3
//step 4 we will have to display our basket
for(let val of sourceArray){
  if(!itemsToRemove.includes(val)){
    finalArray.push(val);
  }
}
console.log(finalArray);
};

//without([1, 2, 3], [1]); // => [2, 3]
//without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
    
const assertArraysEqual = function(arr3, arr4){
  if (eqArrays(arr3, arr4)) {
    console.log(`✅✅✅ Assertion Passed: ${arr3} === ${arr4}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr3} !== ${arr4}`);
  }
};
const colours = ["red","green","blue"];
without(colours, ["black","red","green"]);
assertArraysEqual(colours, ["red","green","blue"]);