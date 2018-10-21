class Person {
  constructor(name = "anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGretting() {
    return `hello ${this.name} your age is ${this.age}`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getGretting() {
    let description = super.getGretting();
    if (this.hasMajor()) {
      description += ` and your hobby is ${this.major}`;
    }
    return description;
  }
}

const pawel = new Person("tomek", 25);
const anonymous = new Person();
const me = new Student("Pawel", 29);

console.log(pawel.getGretting());
console.log(anonymous.getGretting());
console.log(me.getGretting());
