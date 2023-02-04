
const express = require('express');
const app = express();
const axios = require('axios');


// async function getPhotos(req,res,error){
//   try {
//     let searchQueryFromTheFrontEnd = req.query.searchQuery;
//     let url = `https://api.unsplash.com/search/photos/?client_id=${process.env.UNSPLASH_API_KEY}&query=${searchQueryFromTheFrontEnd}&format=json`;
//     let results = await axios.get(url);
//     let pictureInstance = results.data.results.map((pic) => new Photos(pic));
//     res.status(200).send(pictureInstance);
//   } catch (error) {
//     next(error);
//   }
// }


function getPhotos(req,res){
  let searchQueryFromTheFrontEnd = req.query.searchQuery;

  let url = 'https://api.unsplash.com/search/photos';
  let params = {
    client_id: process.env.UNSPLASH_API_KEY,
    query:searchQueryFromTheFrontEnd
  };
  axios.get(url,{params})
    .then(results => results.data.results.map((pic) => new Photos(pic)))
    .then(pictureInstance => console.log(pictureInstance));
}









//ERRORS
// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  console.log(error.message);
  res.status(500).send(error.message);
});

module.exports = getPhotos;






//CLASSES
class Photos {
  constructor(picture) {
    this.src = picture.urls.regular;
    this.alt = picture.alt_description;
    this.artist = picture.user.name;
  }
}
