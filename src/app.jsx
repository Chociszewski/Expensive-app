console.log("app is running");

var userName = "Michal";
var userAge = 48;
var userLocation = "Polska";

var template2 = (
  <div>
    <h1>{(userName + " Chociszewski").toUpperCase()}</h1>
    <p>Age: {userAge}</p>
    <p>{userLocation}</p>
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);
