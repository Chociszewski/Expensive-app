"use strict";

console.log("app is running");

var user = {
  name: "Pawel",
  age: 40,
  location: "Poznan"
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "location: ",
      location
    );
  }
}
var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name
  ),
  React.createElement(
    "p",
    null,
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);
