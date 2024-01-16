class School {
  constructor(name, address, zipcode, city) {
    this.name = name;
    this.address = address;
    this.zipcode = zipcode;
    this.city = city;
    this.students = [];
    this.teachers = [];
  }
}

class Subject {
  constructor(name) {
    this.name = name;
    this.students = [];
    this.teacher = [];
  }
}

class Student {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.subjects = [];
  }
}

class Teacher {
  constructor(name) {
    this.name = name;
    this.subjects = [];
  }
}

const xavierSchool = new School(
  "Xavier's School for Gifted Youngsters",
  "Graymalkin Lane",
  1407,
  "North Salem, New York"
);
console.log(xavierSchool);

const whm = new Subject("World History of Mutants");
const irt = new Subject("Interpersonal Relations and Team Dynamics");
const ams = new Subject("Advanced Mutation Studies");

const phoenix = new Student("Jean Grey");
const cyclops = new Student("Scott Summers");
const nightcrawler = new Student("Kurt Wagner");
const rogue = new Student("Anna Marie");
const shadowCat = new Student("Katheryn Anne Pride");

const proffesorX = new Teacher("Charles Xavier")
const storm = new Teacher("Ororo Munroe")