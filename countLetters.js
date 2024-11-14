const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const countLetters = function(str){
  const result = {};
  for(const item of str){
   // console.log(item);
   if(item !== " "){
    if(result[item]){
      result[item] += 1;
  }else{
   result[item] = 1;
    }
   }
  }
  return result;
};
const result1 = countLetters("Saurav");
//console.log(countLetters("Hello World"));
assertEqual(result1["a"], 2);
assertEqual(result1["v"], 1);
