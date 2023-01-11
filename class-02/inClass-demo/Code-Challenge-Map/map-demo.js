/**
Array.prototype.map


let newArray = array.map(callback(currentValue[, index[, array]])){

  //return element for newArray, after executing some code. 
  
}

1. Identical in its structure to forEach.
2. Iterates over every element.
3. Map() puts items in the new array as it iterates, one for every element no matter what an array of 5 things, as the input will always have 5 things as the output. It's a forEach that makes arrays. 
4. map() is a built in method to call on arrays.


*/


const nums = [10,30,35,50,88];

const output = nums.map(() => 'I am returning now!');
console.log('output: ', output);
console.log('nums Array', nums);

//Tenent of functional programming is that we dont change the original things in the array.
console.log('---------------------------');


let ourNewArray = nums.map((value, index, array) => {
  console.log('V-I-A', value, index, array);
  return value * 7;
});

console.log('new Array x 7', ourNewArray);

console.log('---------------------------');
                            // 10      10     * 10
//                 array     element   element * element
let newNumsArray = nums.map(element => element * element);

console.log('new nums array', newNumsArray);

console.log('---------------------------');



function callback(value, index){
  console.log('mapping inside the callback');
  return value * index;
}

console.log('nums map callback', nums.map(callback));

console.log('---------------------------');
// [10,30,35,50,88];

function fakeMap(array, callback){
  const newArray = [];
  for(let i = 0; i < array.length; i++){
    newArray.push(callback(array[i],i))      
  }
  console.log('in process',newArray);
  return newArray;
}

console.log('fake map():', fakeMap(nums, callback));