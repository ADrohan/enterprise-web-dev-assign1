"use strict";

const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const poiSchema = new Schema({
  name: String,
  category: String,
  description: String,
  longitude: String,
  latitude: String,
});

module.exports = Mongoose.model("Poi", poiSchema);
