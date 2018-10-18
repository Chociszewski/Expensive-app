"use strict";

console.log("app is running");

var app = {
  title: "indecision",
  subtitle: "apka od andrew",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
  }
  render();
};

var removeAll = function removeAll() {
  app.options = [];
  render();
};

var makeDecision = function makeDecision() {
  var random = Math.floor(Math.random() * app.options.length);
  var option = app.options[random];
  alert(option);
};
var appRoot = document.getElementById("app");

var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      "p",
      null,
      app.subtitle
    ),
    React.createElement(
      "p",
      null,
      app.options.length > 0 ? "here are your options" : "no options",
      " "
    ),
    React.createElement(
      "p",
      null,
      app.options.length
    ),
    React.createElement(
      "button",
      { disabled: app.options.length === 0, onClick: makeDecision },
      "what should I do?"
    ),
    React.createElement(
      "button",
      { onClick: removeAll },
      "remove All options"
    ),
    React.createElement(
      "ol",
      null,
      app.options.map(function (option) {
        return React.createElement(
          "li",
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "add option"
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

render();
