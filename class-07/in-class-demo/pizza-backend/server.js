'use strict';

// console.log('Hello from our SERVER PORT!!!!!', process.env.PORT);

// REQUIRE
// In our server, we have to use 'require' instead of import'
// Here we will list the requirement for a server
// npm i express
// USE
// Once I have required something, we have to use it
// this is where we assign the required file a variable name
// React does this in one step with 'import',
// it says we must use it and it assign it to a variable
// Express takes 2 steps: 'require' and 'use'
// This is just how Express works.
// 1.
const express = require('express');
require('dotenv').config();
let data = require('./data/pizza.json');
const cors = require('cors');

// 2.
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5005;



// routes
//Routes we will use to access our end point
/**
 * .get() is an express method
 * it correlates to axios.get
 * the first parameter is a URL in quote
 * the second is a callback function
 */
// our root of our site pass callback () two params
app.get('/',(request, response)=>{
  //then we need to send something back
  response.send('Hello from our server HOME route / !!');
});


app.get('/hello', (request, response) => {
  //localhost:3003/hello?name=bob&lastname=trapper
  console.log('request object', request.query);
  let firstName = request.query.name;
  let lastName = request.query.lastname;
  console.log('!!!1', firstName, lastName);
  response.status(200).send(`Hello, ${firstName} ${lastName}`);
});

app.get('/pizza', (request, response) => {
  //http://localhost:3003/pizza?pizzatype=Chicago%20Pizza
  try {
    let pizzaType = request.query.pizzatype;
    // let dataToSend = data.find(pizza => pizza.pizzatype === pizzaType);
    // console.log('did we find pizza type?', dataToSend);
    let dataToInstantiate = data.find(pizza => pizza.pizzatype === pizzaType);
    let dataToSend = new Pizza(dataToInstantiate);
    console.log(dataToSend, 'got back from Pizza class');
    response.status(200).send(dataToSend);
  } catch (error) {
    //create a new instance of error
    //this will instantiate any new error
    // eslint-disable-next-line no-undef
    next(error);
  }
});




app.get('*', (request, response)=>{
  response.status(404).send('The route was not found. Error 404');
});

// class
class Pizza {
  constructor(pizzaObject){
    console.log('did we get an object to construct?', pizzaObject);
    //do some stuff to it
    this.pizzaType = pizzaObject.pizzatype;
    this.location = pizzaObject.location;
  }
}

//Errors

// eslint-disable-next-line no-unused-vars
app.use((error, request, response, next) => {
  response.status(500).send(error.message);
});

// Listen for PORT to start and keep our server running
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
