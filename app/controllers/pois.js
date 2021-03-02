"use strict";

const Poi = require("../models/poi");

const Pois = {
  home: {
    handler: function (request, h) {
      return h.view("home", { title: "Add a Poi" });
    },
  },
  allpois: {
    handler: async function (request, h) {
      const poiList = await Poi.find().lean();
      return h.view("allpois", {
        title: "Pois so far",
        pois: poiList,
      });
    },
  },
  addpoi: {
    handler: async function (request, h) {
      const data = request.payload;
      const newPoi = new Poi({
        name: data.name,
        category: data.category,
        description: data.description,
        longitude: data.longitude,
        latitude: data.latitude,
      });
      await newPoi.save();
      return h.redirect("/allpois");
    },
  },
};

module.exports = Pois;
