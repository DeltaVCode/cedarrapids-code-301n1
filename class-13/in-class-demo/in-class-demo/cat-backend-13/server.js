"use strict";
console.log("SERVER UP!");

require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5005;

const mongoose = require("mongoose");
const Cat = require("./models/cats.js");
mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Mongoose is connected");
});

app.get("/", (req, res) => {
  res.status(200).send("Hello from Saturdays!");
});
app.get("/cats", getCats);
app.post("/cats", postCats);
app.delete("/cats/:id", deleteCats);
app.put("/cats/:id", updateCats);

async function updateCats(request, response, error) {
  // console.log('id', request.params.id);
  //update data live in the body of the request object
  let id = request.params.id;
  let catData = request.body;
  //  console.log(id, catData);
  try {
    //findByIdAndUpdate() method take in 3 arguments
    //1. id of the thing we want to update
    //2. updated data object
    //3. options object, makes it a put and not a patch
    let updatedCat = await Cat.findByIdAndUpdate(id, catData, {
      new: true,
      overwrite: true,
    });
    console.log("🚀 ~ !!!!!!!!", updatedCat);

    response.status(200).send(updatedCat);
  } catch (error) {
    next(error);
  }
}

async function getCats(request, response, next) {
  try {
    let catResults = await Cat.find();
    response.status(200).send(catResults);
  } catch (error) {
    next(error);
  }
}

async function postCats(request, response, next) {
  //http://localhost:3002/cats    then add the json parse
  console.log(request.body);
  try {
    let createCat = await Cat.create(request.body);
    response.status(200).send(createCat);
  } catch (error) {
    next(error);
  }
}

async function deleteCats(request, response, next) {
  //http:localhost:3002/cats/63ebfe8d317e5dfe439030e7
  console.log("id", request.params.id);

  let id = request.params.id;
  try {
    //here we would think about is our user validated/authorize to delete
    await Cat.findByIdAndDelete(id);
    response.status(200).send("Cat Deleted");
  } catch (error) {
    next(error);
  }
}

app.get("*", (request, response) => {
  response.status(404).send("Not available");
});

// eslint-disable-next-line no-unused-vars
app.use((error, request, res, next) => {
  res.status(500).send(error.message);
});

app.listen(PORT, () => console.log(`listening on Port ${PORT}`));
