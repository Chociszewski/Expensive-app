//Object destruction

let person = {
  name: "Pawel",
  age: 32,
  location: {
    city: "Poznan",
    temp: 2
  }
};

let { name: firstname = "anonymous", age } = person;
console.log(`${firstname} is ${age}`);

let { city, temp: temperature } = person.location;
console.log(` It's ${temperature} in ${city}`);

//Array destruction

let address = ["Polna 80a", "Wielkopolska", "Poznan", "60-803"];

let [, wojewodztwo, cityAddress = "Rabka", zip] = address;

console.log(`You are in ${cityAddress} ${wojewodztwo}`);
