'use strict';

console.log('seed the database with data');

require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URL);
const Cat = require("./models/cats.js");

async function seed() {
  // name: {type: String, require: true},
  // color:{type: String, require: true},
  // spayNeuter:{type: Boolean, require: true},
  // location:{type: String, require: true}

  await Cat.create({
    name: "Big Cat Colin",
    color: "Black and White and Orange",
    spayNeuter: false,
    location: "Nevada",
    email: 'craig@iowastartupaccelerator.com'
  });
  console.log("Big Cat!!");
  await Cat.create({
    name: "Tom Cat",
    color: "Grey and white",
    spayNeuter: true,
    location: "Alley ways",
    email: 'craig@iowastartupaccelerator.com'
  });
  console.log("Tom Cat");
  await Cat.create({
    name: "Lil Meow Now",
    color: "Hot Pink and Purps",
    spayNeuter: false,
    location: "Mid West Side",
    email: 'craig@iowastartupaccelerator.com'
  });
  console.log("Lil Meow Now.");

  console.log("Closing the DB connection for our seed file");
  mongoose.disconnect();
}
//node seed.js

seed();
