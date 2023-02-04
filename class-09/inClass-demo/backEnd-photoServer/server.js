'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5005;
const getPhotos = require('./modules/photos');


app.get('/', (req, res) => {
  res.status(200).send('Hello from the Image Finder Server, have a great day!');
});

// app.get('/', getHomeRoute);
//get('route', callback function ()=>{});
app.get('/photos', getPhotos);
// app.get('*', getCatchAllRoute );

app.get('*', (req, res) => {
  res.status(404).send('These are not the droids your looking 404.');
});



//ERRORS
// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  console.log(error.message);
  res.status(500).send(error.message);
});

//LISTEN
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
