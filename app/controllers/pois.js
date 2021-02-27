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
      var userEmail = request.auth.credentials.id;
      //data.user = this.currentUser;
      data.user = this.users[userEmail];
      this.pois.push(data);
      return h.redirect("/allpois");
    },
  },
};

module.exports = Pois;
