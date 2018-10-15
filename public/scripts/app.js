"use strict";

console.log("app is running");

var userName = "Michal";
var userAge = 48;
var userLocation = "Polska";

var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    (userName + " Chociszewski").toUpperCase()
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    userAge
  ),
  React.createElement(
    "p",
    null,
    userLocation
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);
