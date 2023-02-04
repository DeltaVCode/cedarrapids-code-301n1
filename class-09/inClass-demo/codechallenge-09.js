  //Object iteration 

 //Today we will use 3 methods 
    //1. Object.keys(object);
    //2. Object.values(object);
    //3. Object.entries(object);



  const cohort = {
    bob :   {name: 'Bob',   backGroundColor: 'red'},
    larry : {name: 'Larry', backGroundColor:'blue'},
    gerry : {name: 'Gerry', backGroundColor: 'green'},
    garry : {name: 'Garry', backGroundColor: 'yellow'}
    };
    
    
    
    // for(let i in arr) iterate i though every key of the object
    
    for(let i in cohort){
      console.log(i);
      console.log(cohort[i]);
    }
    
   
    
    
    console.log(Object.keys(cohort));
    
    const keyArr = Object.keys(cohort);
    
    keyArr.forEach(studentKey => console.log('hello ' + studentKey));
    
    
    
    keyArr.forEach(studentKey => console.log(cohort[studentKey]));
    
    keyArr.forEach(studentKey => {
    console.log(cohort[studentKey])
    });
    
    
    
    console.log(Object.values(cohort));
   //is an array of values 
    
    Object.values(cohort).forEach(student => {
      console.log('student colors: ',student.backGroundColor);
    });
    
    
    
    //Object.values(object);
    //puts the values into another array. takes each entry in an object, then entry is the key and the value and puts it in an array of arrays. 
    console.log('xxx',Object.entries(cohort));
    
    
    
    
    Object.entries(cohort).forEach(minArr => {
      console.log('minarry',minArr);
      if(/^[a-g]/.test(minArr[0])){
        console.log(minArr[1].backGroundColor);
      }
    });

    // clone functions and clone objects. 

    let person =
  {
    'name':'John',
    'role':'Dad',
    'interests': ['Coaching','Teaching'],
  };

console.log(person.name);

// for ... in
for( let property in person ) {
  console.log(property, person[property]);
}

// Object.keys
let properties = Object.keys(person);
properties.forEach( property => {
  console.log(property, person[property]);
});

Object.keys(person).forEach( property => {
  console.log(property, person[property]);
});

// Object.values
console.log(Object.values(person));

Object.values(person).forEach(value => {
  console.log(value);
});

// Object.entries
Object.entries(person).forEach(entry => {
  console.log(entry);
});





'use strict';

  //Object iteration 

 //Today we will use 3 methods 
    //1. Object.keys(object);
    //2. Object.values(object);
    //3. Object.entries(object);

let student = {
  name: 'Spicoli',
  shoes: 'Vans',
  class: '2nd year Senior',
  hairColor: 'Surfer',
  car: 'volkswagon bus'
};

//individual access to object properties
console.log(student.name);

//javascript object the parent
//puts all properties in their own array
let entries = Object.entries(student);
console.log('entries: ', entries);

//puts all keys in an array
let keys = Object.keys(student);
console.log('keys: ', keys);

//puts all values in an array
let values = Object.values(student);
console.log('values: ', values);


//Question 6 is contrived. So may may need to use object values but also need object keys to get it to work as well. 