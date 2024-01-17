class School {
  constructor(name, address, zipcode, city) {
    this.name = name;
    this.address = address;
    this.zipcode = zipcode;
    this.city = city;
    this.students = [];
    this.teachers = [];
  }
  addStudent(student) {
    this.students.push(student);
    student = this;
    return this;
  }
  addTeacher(teacher) {
    this.teachers.push(teacher);
    teacher = this;
    return this;
  }
}

class Subject {
  constructor(name) {
    this.name = name;
    this.students = [];
    this.teacher = [];
  }
  addTeacher(teacher) {
    this.teacher.push(teacher);
    teacher.subjects = this;
  }
  addStudent(student) {
    this.students.push(student);
    student.subjects = this;
  }
  quitSubject(student, subject) {
    if (this.students.includes(student)) {
      const index = this.students.indexOf(student);
      this.students.splice(index, 1);
    }
    if (student.subjects.includes(subject)) {
      const index = student.subjects.indexOf(subject);
      this.subject.splice(index, 1);
    }
  }
  removeTeacher(teacher) {
    if (this.teacher.includes(teacher)) {
      const index = this.teacher.indexOf(teacher);
      this.teacher.splice(index, 1);
    }
  }
}

class Student {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.subjects = [];
  }
  enlistToSubject(subject) {
    this.subjects.push(subject);
    subject.students.push(this);
    return this;
  }
  relegateStudents(subject, newSubject) {
    if (this.subjects.includes(subject)) {
      const index = this.subjects.indexOf(subject);
      this.subjects.splice(index, 1);
      this.subjects.push(newSubject);
    }
  }
}
class Teacher {
  constructor(name) {
    this.name = name;
    this.subjects = [];
  }

  addSubject(subject) {
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

ams.addTeacher(proffesorStorm);
proffesorX.addSubject(whm, proffesorX);
nightcrawler.enlistToSubject(ams, nightcrawler);

cyclops.enlistToSubject(ams);
cyclops.enlistToSubject(whm);
xavierSchool.addTeacher(proffesorStorm);
ams.removeTeacher(proffesorStorm);
console.log(ams);
nightcrawler.relegateStudents(ams, irt);
console.log(nightcrawler);
