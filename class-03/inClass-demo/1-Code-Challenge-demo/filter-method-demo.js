//array.prototype.filter shares the call back of map and forEach 
//it takes in value, index, and array
//if the call back returns true, it keeps the thing in the array
//if it returns false it skips it
//it makes a new array with these rules
const names = ['Lister','Holly','SmegHead','Kyrton','Rimmer', 'Toasty','Cat'];


let returnTrue = names.filter((value, index, array) => {
  return true;
});

console.log('return true: ',returnTrue);
console.log('\n');

let returnFalse = names.filter((value, index, array) => {
  return false;
});

console.log('return false', returnFalse);
console.log('\n');

// ['Lister','Holly','SmegHead','Kyrton','Rimmer', 'Toasty','Cat'];
let modulusOperator = names.filter((value, index, array) => {
  if(index % 2){
    return true;
  } else {
    return false;
  }
});


console.log('modulo', modulusOperator);
console.log('\n');


let filteredNames = names.filter((value, index, array) =>{
  if(value.length < 6){
    return true;
  } else {
    return false;
  }
});

console.log('filtered names: ', filteredNames);
console.log('\n');


let filteredNames2 = names.filter((name) => name.length < 6);

console.log('filtered names2: ', filteredNames2);
console.log('\n');