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
const takeUntil = function(array, callback){
 const results = [];
 for(let item of array){
   if(callback(item)){
    break;
   }
   results.push(item);
 }
 return results;
};
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results1, [1,2,5,7,2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);