# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @souravdhillon010/lotide`

**Require it:**

`const _ = require('@souravdhillon010/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head(...)`: function head returns the first item in the array.
- `tail(...)`: function tail which returns the "tail" of an array: everything except for the first item (head) of the provided array.
- `middle(...)`: middle function returns middle element of an array.
- `assertArraysEqual(...)`: assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
- `assertEqual(...)`: assertEqual function compare the two values it takes in and print out a message telling us if they match or not.
- `eqArrays(...)`: function eqArrays takes in two arrays and returns true or false, based on a perfect match.
- `assertObjectsEqual(...)`: assertObjectsEqual will take in two objects and console.log an appropriate message to the console.
- `countLetters(...)`: function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
- `countOnly(...)`: function should take in a collection of items and return counts for a specific subset of those items. It won't count everything. In order to decide what to count, it will also be given an idea of which items we care about and it will only count those, ignoring the others.Items in our case will be limited to Strings.
- `eqObjects(...)`: function eqObjects will take in two objects and returns true or false, based on a perfect match.
- `findKey(...)`: function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
- `findKeyByValue(...)`: function findKeyByValue takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
- `letterPositions(...)`: function letterPositions will return all the indices (zero-based positions) in the string where each character is found.
For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.
- `map(...)`: map function will return a new array based on the results of the callback function.
- `takeUntil(...)`: takeUntil function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
- `without(...)`: without function will return a subset of a given array, removing unwanted elements.