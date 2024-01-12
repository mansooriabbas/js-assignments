//subjects

let math = {
  name: "Mathematics",
  students: [],
  teacher: {},
  addStudent: function (student) {
    this.students.push(student);
  },
  removeTeacher: function (teacherToRemove) {
    if (this.teacher === teacherToRemove) {
      // Check if the teacherToRemove is the same as the current teacher
      for (let name in this.teacher) {
        if (this.teacher.hasOwnProperty(name)) {
          delete this.teacher.name;
        }
      }
    }
  },
};

let english = {
  name: "English",
  students: [],
  teacher: {},
  addStudent: function (student) {
    this.students.push(student);
  },
  removeTeacher: function (teacherToRemove) {
    if (this.teacher === teacherToRemove) {
      // Check if the teacherToRemove is the same as the current teacher
      for (let name in this.teacher) {
        if (this.teacher.hasOwnProperty(name)) {
          delete this.teacher.name;
        }
      }
    }
  },
};

let history = {
  name: "History",
  students: [],
  teacher: {},
  addStudent: function (student) {
    this.students.push(student);
  },
  removeTeacher: function (teacherToRemove) {
    if (this.teacher === teacherToRemove) {
      // Check if the teacherToRemove is the same as the current teacher
      for (let name in this.teacher) {
        if (this.teacher.hasOwnProperty(name)) {
          delete this.teacher.name;
        }
      }
    }
  },
};

//teachers

let teacherSmith = {
  name: "Smith",
  subjects: [],
  addSubject: function (subject) {
    this.subjects.push(subject); //this refers to the object that the method resides in, in this case,subjects is out of scope for addSubject method so we use the this keyword
    return (subject.teacher = this); //here, we are saying that the subject passed to the method will now have a reference to the teacher by binding the teacher object (this) to its teacher property
  },
  fireTeacher: function () {},
};

let teacherJohnson = {
  name: "Johnson",
  subjects: [],
  addSubject: function (subject) {
    this.subjects.push(subject);
    return (subject.teacher = this);
  },
};

//students

let alice = {
  name: "Alice",
  age: 18,
  gender: "Female",
  subjects: [],
  enlistToSubject: function (subject) {
    this.subjects.push(subject);
  },
  quitSubject: function (subject) {
    const index = this.subjects.indexOf(subject);
    if (index !== -1) {
      this.subjects.splice(index, 1);
    }
  },
};

let bob = {
  name: "Bob",
  age: 17,
  gender: "Male",
  subjects: [],
  enlistToSubject: function (subject) {
    this.subjects.push(subject);
  },
  quitSubject: function (subject) {
    const index = this.subjects.indexOf(subject);
    if (index !== -1) {
      this.subjects.splice(index, 1);
    }
  },
};

let charlie = {
  name: "Charlie",
  age: 16,
  gender: "Male",
  subjects: [],
  enlistToSubject: function (subject) {
    this.subjects.push(subject);
  },
  quitSubject: function (subject) {
    const index = this.subjects.indexOf(subject);
    if (index !== -1) {
      this.subjects.splice(index, 1);
    }
  },
};

let diana = {
  name: "Diana",
  age: 18,
  gender: "Female",
  subjects: [],
  enlistToSubject: function (subject) {
    this.subjects.push(subject);
  },
  quitSubject: function (subject) {
    const index = this.subjects.indexOf(subject);
    if (index !== -1) {
      this.subjects.splice(index, 1);
    }
  },
};

let eva = {
  name: "Eva",
  age: 17,
  gender: "Female",
  subjects: [],
  enlistToSubject: function (subject) {
    this.subjects.push(subject);
  },
  quitSubject: function (subject) {
    const index = this.subjects.indexOf(subject);
    if (index !== -1) {
      this.subjects.splice(index, 1);
    }
  },
};

//school

const regularSchool = {
  name: "City High School",
  address: "123 Main Street",
  zipcode: "56789",
  city: "Anytown",
  students: [],
  teachers: [],
  addTeacher: function (teacher) {
    this.teachers.push(teacher);
  },
  addStudent: function (student) {
    this.students.push(student);
  },
  relegateStudent: function (student) {
    const index = this.students.indexOf(student);
    if (index !== -1) {
      this.students.splice(index, 1);
    }
  },
  fireTeacher: function (teacher) {
    // Remove the teacher from the teachers array

    const teacherIndex = this.teachers.indexOf(teacher);
    if (teacherIndex !== -1) {
      this.teachers.splice(teacherIndex);
    }
  },
};

// console.log(teacherJohnson);
// console.log(math);

// math.students.push(charlie);
// console.log(math);

// const addSubjectToTeacher = (subject, teacher) => {
//   subject.teacher = teacher;
//   teacher.subjects.push(subject);
//   return teacher;
// };

// teacherJohnson.addSubject(history);
// teacherSmith.addSubject(history);
// // console.log(addSubjectToTeacher(history, teacherJohnson));

// regularSchool.addTeacher(teacherJohnson);
// regularSchool.addTeacher(teacherSmith);

// // alice.enlistToSubject(math);

// regularSchool.addStudent(bob);

// math.addStudent(bob);

// eva.enlistToSubject(math);
// eva.quitSubject(math);

// history.removeTeacher(teacherSmith);

// regularSchool.relegateStudent(bob);
// regularSchool.fireTeacher(teacherJohnson);

function enlistStudentToSubject(subject, ...students) {
  students.forEach((student) => {
    subject.addStudent(student);
  });
}

enlistStudentToSubject(math, alice, bob, charlie, diana);

console.log(math);
