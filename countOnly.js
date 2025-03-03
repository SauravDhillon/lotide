const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount){
// this function should give how many instances of each
// string were found in allItems array of strings
// function countOnly needs to return a proper report on 
// all strings found in input Array and their respective 
//counts with returning an object
 const results = {};
 for (const name of allItems){
  console.log(name);
  if(itemsToCount[name]){
    if(results[name]){
      results[name] += 1;
    }else{
      results[name] = 1;
    }
  }
  
 }
 return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);