"use strict";

const Pois = {
  home: {
    handler: function (request, h) {
      return h.view("home", { title: "Add a Poi" });
    },
  },
  allpois: {
    handler: function (request, h) {
      return h.view("allpois", {
        title: "Pois so far",
        pois: this.pois,
      });
    },
  },
  addpoi: {
    handler: function (request, h) {
      const data = request.payload;
      data.user = this.currentUser;
      this.pois.push(data);
      return h.redirect("/allpois");
    },
  },
};

module.exports = Pois;
