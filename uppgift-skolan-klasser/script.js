class School {
  constructor(name, address, zipcode, city) {
    this.name = name;
    this.address = address;
    this.zipcode = zipcode;
    this.city = city;
    this.students = [];
    this.teachers = [];
  }
  addStudent(...student) {
    this.students.push(student);
    student = this;
    return this;
  }
  addTeacher(teacher) {
    this.teachers.push(teacher);
    teacher = this;
    return this;
  }
  fireTeacher(teacher) {
    if (this.teachers.includes(teacher)) {
      const index = this.teachers.indexOf(teacher);
      this.teachers.splice(index, 1);
    }
    teacher.subjects = [];
    teacher.student = [];
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
class Grade {
  constructor(value, comment) {
    this.value = value;
    this.comment = comment || [];
  }
}
class Student {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.subjects = [];
    this.grades = {};
  }

  setGrade(subject, value, comment) {
    if(this.subjects.includes(subject)){
      this.grades[subject.name] = new Grade(value, comment)
    }
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
console.log(ams);
nightcrawler.relegateStudents(ams, irt);
xavierSchool.addTeacher(proffesorX);
xavierSchool.addTeacher(proffesorStorm);
xavierSchool.fireTeacher(proffesorStorm);
console.log(proffesorStorm);
xavierSchool.addStudent(cyclops, phoenix, rogue, shadowCat);
console.log(xavierSchool);

//global functions
const displayAllStudents = (school) => {
  for (let student of school.students) {
    console.log(student);
  }
};
function displayAllSubjectsOfStudent(student) {
  return student.subjects;
}
function displayAllStudentsEnlistedToSubject(subject) {
  return subject.students;
}
function displayAllTeachers(school) {
  for (let teacher of school.teachers) {
    return teacher;
  }
}

displayAllStudents(xavierSchool);

const SubjectsOfStudent = displayAllSubjectsOfStudent(cyclops);
console.log(SubjectsOfStudent);

const studentsEnlistedToSubject = displayAllStudentsEnlistedToSubject(whm);
console.log(studentsEnlistedToSubject);

const allTeachers = displayAllTeachers(xavierSchool);
console.log(allTeachers);

cyclops.setGrade(ams, "A", "Cyclops is a good student")
console.log(cyclops);