const Pois = {
  index: {
    handler: function (request, h) {
      //return h.file("./app/views/main.hbs");
      return h.view("main", { title: "Welcome to Point of Information" });
    },
  },
  signup: {
    handler: function (request, h) {
      //return h.file("./app/views/signup.hbs");
      return h.view("signup", { title: "Signup to Point of Information" });
    },
  },
  login: {
    handler: function (request, h) {
      //return h.file("./app/views/login.hbs");
      return h.view("login", { title: "Login to Point of Information" });
    },
  },
};

module.exports = Pois;
