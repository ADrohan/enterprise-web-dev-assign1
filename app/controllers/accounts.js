"use strict";

const Accounts = {
  index: {
    auth: false,
    handler: function (request, h) {
      return h.view("main", { title: "Welcome to Point of Information" });
    },
  },
  showSignup: {
    auth: false,
    handler: function (request, h) {
      return h.view("signup", { title: "Signup to Point of Information" });
    },
  },
  signup: {
    auth: false,
    handler: function (request, h) {
      const user = request.payload;
      this.users[user.email] = user;
      //this.currentUser = user;
      request.cookieAuth.set({ id: user.email });
      return h.redirect("/home");
    },
  },
  showLogin: {
    auth: false,
    handler: function (request, h) {
      return h.view("login", { title: "Login to Points of Information" });
    },
  },
  login: {
    auth: false,
    handler: function (request, h) {
      const user = request.payload;
      if (user.email in this.users && user.password === this.users[user.email].password) {
        request.cookieAuth.set({ id: user.email });
        //this.currentUser = this.users[user.email];
        return h.redirect("/home");
      }
      return h.redirect("/");
    },
  },
  showSettings: {
    handler: function (request, h) {
      var userEmail = request.auth.credentials.id;
      const userDetails = this.users[userEmail];
      return h.view("settings", { title: "My Settings", user: userDetails });
    },
  },
  updateSettings: {
    handler: function (request, h) {
      const user = request.payload;
      this.users[user.email] = user;
      return h.redirect("/settings");
    },
  },

  logout: {
    handler: function (request, h) {
      request.cookieAuth.clear();
      return h.redirect("/");
    },
  },
};

module.exports = Accounts;
