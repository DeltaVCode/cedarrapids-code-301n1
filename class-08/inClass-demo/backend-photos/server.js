'use strict';
console.log('image finder server is connected!!!');

/**
================= Servers ====================
A server needs to respond to information on the internet
When information is sent on the internet it primarily uses http
http is a way to encode data and send it in a uniform way so everyone can talk. Its like the alphabet of talking on the internet

The job of talking over http, and especially listening for http requests is handled by Express It gets translated by express into javascript

http requests contain a lot of info {huge object header body}
The basics are a lot like mail
there is an address: url
there is a to and a from  to: route, from: client url
There can be a letter inside: encode information completely hidden in the body the data lives
the response - like a letter in the envelope
There can be info written on the outside of the letter - this is our queries
- info on the visible url

Express() reads all of this for us and much more


================ Environment  ===============
A server has to run somewhere
Heroku, AWS, terminal, render
The server needs to run on a PORT on our local we use 3000, 3002,
heroku tends to gravitate towards like 27000-32000, aws i have no clue
There are settings our server has to pay attention to when it runs.
We will create dynamic variables instead of hard coded ones that our server can read live.
These variables make up / live in our environment
not goDaddy (goDaddy is a DNS, redirects to where it lives)
*/

//REQUIRES
const express = require('express');
const cors = require('cors');
//Cross origin Resource sharing: allows connection between 2 local servers or websites: it can block or allow access to any list of urls. By default it allows localhost to talk to itself
require('dotenv').config();
const axios = require('axios');

//USE
//app === server
const app = express();
//create a server from the express library
app.use(cors());
//app.use() loads middlewear - we are loading cors so that requests, dont get blocked when they are local.
const PORT = process.env.PORT || 5005;

//ROUTES
// ==== Routes ====
/**
app.get : attaches a listener of method type GET to the server with a (route, and a callback)
'/' : route - we can visit the server at localhost:3002 or localhost:3002/ and
trigger this callback
(request, response) => : the callback function, think of it as (event) => on
an event handler
request : all the data from the client/front end and react or vue or angluar...
response: all the data from us + we can attach data to it + we can trigger a
response to start with this parameter
response.send(<anything>) : takes the argument and sends it to the client/frontend
*/
app.get('/', (request, response) => {
  response.status(200).send('Hello from our photo server');
});



app.get('/photos', (req, res, next)=> {
  // TODO: get information from my frontend - keyword
  // TODO: make an axios call to unsplash API and get data back
  // TODO: select data to send back to the frontend. use NEW and class
  try {
    //front end will send us a value for a search for photos
    let searchQueryFromTheFrontEnd = req.query.searchQuery;
    console.log('🚀 ~ file: server.js:76 ~ app.get ~ searchQueryFromTheFrontEnd', searchQueryFromTheFrontEnd);

    let url = `https://api/unsplash.com/search/photos/?client_id=${process.env.UNSPLASH_API_KEY}&query=${searchQueryFromTheFrontEnd}&format=json`;
    console.log(url);
    // use thunderclient to rebuild this api url.
    // we also use thunderclient to build the weather api url.
    // should send to a constructor to select data that we want back from api call
    // use thunder client to build the URL
    // look at render and talk about adding weather keys for api calls
    // look at lab 8 tech requirements in trello

  } catch (error) {
    next(error);
  }

  res.send('hello');
});

app.get('*', (req, res) => {
  res.status(404).send('These are not the droids your looking 404.');
});

//CLASSES
//add photo constructor class to get the properties from our object from the api call

//ERRORS
// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  console.log(error.message);
  res.status(500).send(error.message);
});

//START SERVER LISTENING
//server.method(1st, 2nd log out port);
//causes server to run and listen for when a route is hit.
app.listen(PORT, ()=> console.log(`Listening on PORT: ${PORT}`));
