console.log("app is running");

var user = {
  name: "Pawel",
  age: 40,
  location: "Poznan"
};

function getLocation(location) {
  if (location) {
    return <p>location: {location}</p>;
  }
}
var template2 = (
  <div>
    <h1>{user.name}</h1>
    <p>{user.age}</p>
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);
