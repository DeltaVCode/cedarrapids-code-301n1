'use strict';

let string = 'excellent';

let result = string.split('');
console.log("🚀 ~ file: codechallenge-11.js:6 ~ result", result);

let result2 = result.join('-');
console.log("🚀 ~ file: codechallenge-11.js:10 ~ result2", result2);

let result3 = result.toUpperCase();
console.log("🚀 ~ file: codechallenge-11.js:14 ~ result3", result3)


//chaining with syntactical sugar when it aids in readability. 
let theResult = string.split('').join('-').toUpperCase();
console.log("🚀 ~ file: codechallenge-11.js:19 ~ theResult", theResult)

/** 
 * let result = string
              .split('')
              .join('-')
              .toUpperCase();

*/