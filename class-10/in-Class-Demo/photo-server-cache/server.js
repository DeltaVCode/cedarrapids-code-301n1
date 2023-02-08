'use strict';
console.log('image finder server is connected!!!');

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5005;
const getPhotos = require('./modules/my-photo.js');

app.get('/', (request, response) => {
  response.status(200).send('Hello from our photo server');
});

app.get('/photos', getPhotos);


app.get('*', (req, res) => {
  res.status(404).send('These are not the droids your looking 404.');
});

app.listen(PORT, ()=> console.log(`Listening on PORT: ${PORT}`));
