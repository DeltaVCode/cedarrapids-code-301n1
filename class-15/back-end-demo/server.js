"use strict";
console.log("SERVER UP!");

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Cat = require("./models/cats.js");
const verifyUser = require("./auth.js");

mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Mongoose is connected");
});
 


const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5005;



app.get("/", (req, res) => {
  res.status(200).send("Hello from Saturdays!");
});

app.use(verifyUser);

app.get("/cats", getCats);
app.post("/cats", postCats);
app.delete("/cats/:id", deleteCats);
app.put("/cats/:id", updateCats);

async function updateCats(request, response, error) {
  let id = request.params.id;
  let catData = request.body;
  try {
    let updatedCat = await Cat.findByIdAndUpdate(id, {  catData, email: req.user.email },{
      new: true,
      overwrite: true,
    });
    response.status(200).send(updatedCat);
  } catch (error) {
    next(error);
  }
}

async function getCats(request, response) {
  try {
    let catResults = await Cat.find({ email: request.user.email });
    // console.log(catResults);
    response.status(200).send(catResults);
  } catch (err) {
    console.error(err);
    response.status(500).send("server error");
  }
}
// async function getCats(request, response,next) {
//   console.log('hihihihih');
//   try {
//     let catResults = await Cat.find();
//     console.log(catResults);
//     response.status(200).send(catResults);
//   } catch (err) {
//     console.error(err);
//    next(error);
//   }
// }


async function postCats(request, response, next) {
  try {
    let createCat = await Cat.create(request.body);
    response.status(200).send(createCat);
  } catch (error) {
    next(error);
  }
}

async function deleteCats(request, response, next) {
  let id = request.params.id;
  try {
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
