// 1. Given this function: 
// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function(num) {
//     return num % 2 === 0
//   });
// }

// 1. Answer: Refactor it to use the rest operator & an arrow function: 

const filterOutOdds = (...args) => args.filter( val => val % 2 === 0)

// 2. Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

// Make sure to do this using the rest and spread operator.


const findMin = (...args) => Math.min(...args)

// 3. ## **mergeObjects**

// Write a function called ***mergeObjects*** that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

const mergeObjects = (val1, val2) => ({...val1, ...val2})

// 4. ## **doubleAndReturnArgs**

// Write a function called ***doubleAndReturnArgs*** which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

const doubleAndReturnArgs = (arr, ...args) => (...arr, ...args.map(val => val * 2))

// 5. ## **Slice and Dice!**

// For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

// Make sure that you are always returning a new array or object and not modifying the existing inputs.

const removeRandom = items => {
  let index = Math.floor(Math.random() * items.length);
  return [...items.slice(0, index), ...items.slice(index + 1)];
}

const extend = (array1, array2) => {
  return [...array1, ...array2];
}

const addKeyVal = (obj, key, val) => {
  let newObject = {...obj }
  newObject[key] = val;
  return newObject;
}

const removeKey = (obj, key) => {
  let newObject = {...obj }
  delete newObject[key]
  return newObject;
}

const combine = (object1, object2) => {
  return {...object1, ...object2 };
}

const update = (obj, key, val) => {
  let newObject = {...obj }
  newObject[key] = val;
  return newObject
}