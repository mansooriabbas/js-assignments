class School {
  constructor(name, address, zipcode, city) {
    this.name = name;
    this.address = address;
    this.zipcode = zipcode;
    this.city = city;
    this.students = [];
    this.teachers = [];
  }
  addTeacher(teacher) {
    this.teachers.push(teacher);
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

  addSubjectToTeacher(subject) {
    this.subjects.push(subject);
    subject.teacher = this;
    return this;
  }
}

const xavierSchool = new School(
  "Xavier's School for Gifted Youngsters",
  "Graymalkin Lane",
  1407,
  "North Salem, New York"
);
// console.log(xavierSchool);

const whm = new Subject("World History of Mutants");
const irt = new Subject("Interpersonal Relations and Team Dynamics");
const ams = new Subject("Advanced Mutation Studies");

const phoenix = new Student("Jean Grey", 15, "female");
const cyclops = new Student("Scott Summers", 18, "male");
const nightcrawler = new Student("Kurt Wagner", 18, "male");
const rogue = new Student("Anna Marie", 16, "female");
const shadowCat = new Student("Katheryn Anne Pride", 20, "female");

const proffesorX = new Teacher("Charles Xavier");
const proffesorStorm = new Teacher("Ororo Munroe");
xavierSchool.addTeacher(proffesorStorm);
// function addSubjectToTeacher(subject, teacher) {
//   teacher.subjects.push(subject);
//   subject.teacher = teacher;
//   return teacher;
// }

proffesorX.addSubjectToTeacher(whm, proffesorX);

console.log(proffesorX);
console.log(whm);
console.log(xavierSchool);
console.log(proffesorStorm);