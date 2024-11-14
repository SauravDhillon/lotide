const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, value){
// function will scan obj given as param to check for
// key associated with value , if no key with that value
// is found it should return undefined 
//step 1 for in loop to iterate in object
//step 2 we will match if value in object matches outside
//argument 
for(const key in obj){
  if(obj[key] === value){
    return key;
  }
}
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

const car ={
  company: "Toyota",
  model: "Camry",
  make: 1978,
  isFunctional: true
}

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(car, true), "isFunctional");