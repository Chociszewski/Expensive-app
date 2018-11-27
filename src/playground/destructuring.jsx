//Objec destructuring

const person = {
  name: "andrew",
  age: 26,
  location: {
    city: "Philadelphia",
    temp: 92
  }
};

const { name: firstName = "anonymous", age } = person;
console.log(`${firstName} is ${age}`);

const { city, temp: temperature } = person.location;
if (city && temperature) {
  console.log(`It's ${temperature} in ${city}`);
}

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holigay",
  publisher: {
    name: "Penguin"
  }
};

const { name: publisherName = "Self - Published" } = book.publisher;

console.log(publisherName);

//
//Array destructuring
//

const address = [
  "1299 S Juniper Street",
  "Philadelphia",
  "Pensylvania",
  "19147"
];

const [, city, state = "New York"] = address;

console.log(`You are in ${city} ${state}`);

const Item = ["coffe (hot)", "$2.00", "$2.50", "2.75"];

const [coffe, , cost] = Item;
console.log(`A medium ${coffe} costs ${cost}`);
