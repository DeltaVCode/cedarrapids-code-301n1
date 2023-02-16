'use strict';
console.log('SERVER UP!');

// LAB 12 - FEATURED TASKS
// Add a new route and handler function to your server, to respond to `POST` requests to `/books`. This is your book-creation end point. Verify it's working by sending a raw POST request via your REST Client.
// Be sure to include server-side error checking, in case something goes wrong. Respond with appropriate status codes, if anything goes wrong. Verify with your REST Client.
// Add a server end point to handle `DELETE` requests to `/books/:id`.

// REQUIRE
require('dotenv').config();
const express = require('express');
const cors = require('cors');

// USE
// implement express .get(), .use(), .post(), delete()
const app = express();

// middleware its like our bouncer....
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5005;

//npm install mongoose this will bring in mongoose
const mongoose = require('mongoose');
//go get our model for our data
const Cat = require('./models/cats.js');
//Make sure we can connect to mongo using mongoose
mongoose.connect(process.env.DB_URL);

//add validation to confirm we are wired up to our Mongo DB
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});


app.get('/', (req, res) => {
  res.status(200).send('Hello from Server!');
});

// app.whateverMethod('/', callback())
app.get('/cats', getCats);
app.post('/cats', postCats);
app.delete('/cats/:id', deleteCats);
//We need to declare a path parameter, we need this to process our id
//we will use a variable to capture that id
// to create that variable we add ':' then variable name to our path('path variable')

async function getCats(request, response, next){
  try {
    let catResults = await Cat.find();
    response.status(200).send(catResults);
  } catch (error) {
    next(error);
  }
}


async function postCats(request, response, next){
  console.log('coming in on: ',request.body);
  try {
    let createCat = await Cat.create(request.body);
    response.status(200).send(createCat);
  } catch (error) {
    next(error);
  }
}

async function deleteCats(request, response, next){
  console.log('id', request.params.id);
  // Model.findByIdAndDelete()
  try {
    let id = request.params.id;
    await Cat.findByIdAndDelete(id);
    response.status(200).send('Cat was ...');
  } catch (error) {
    
  }
}











//star do?
app.get('*', (request, response) => {
  response.status(404).send('Not available');
});

// ERROR
// eslint-disable-next-line no-unused-vars
app.use((error, request, res, next) => {
  res.status(500).send(error.message);
});

// LISTEN(port, callback)
app.listen(PORT, () => console.log(`listening on Port ${PORT}`));
