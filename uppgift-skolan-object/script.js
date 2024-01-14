//Grades
let grades = {
  entries: [],

  addGrade: function (student, value, subject, comment) {
    this.entries.push({
      value: value,
      subject: subject,
      student: student,
      comment: comment,
      date: new Date(),
    });
  },
};
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
  displayAllSubjectsOfStudent: function (student) {
    const allSubjects = [];
    student.subjects.forEach((sub) => {
      allSubjects.push(sub);
    });
    return allSubjects;
  },

  displayAllStudentsEnlistedToSubject: function (subject) {
    const allStudents = [];
    subject.students.forEach((student) => {
      allStudents.push(student);
    });
    return allStudents;
  },
  addTeacherToSubject: function (teacher) {
    teacher.addSubject(this);
  },
  addSubjectToStudent: function (...students) {
    students.forEach((student) => {
      student.enlistToSubject(this);
    });
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
  displayAllSubjectsOfStudent: function (student) {
    const allSubjects = [];
    student.subjects.forEach((sub) => {
      allSubjects.push(sub);
    });
    return allSubjects;
  },

  displayAllStudentsEnlistedToSubject: function (subject) {
    const allStudents = [];
    subject.students.forEach((student) => {
      allStudents.push(student);
    });
    return allStudents;
  },
  addTeacherToSubject: function (teacher) {
    teacher.addSubject(this);
  },
  addSubjectToStudent: function (...students) {
    students.forEach((student) => {
      student.enlistToSubject(this);
    });
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
  displayAllSubjectsOfStudent: function (student) {
    const allSubjects = [];
    student.subjects.forEach((sub) => {
      allSubjects.push(sub);
    });
    return allSubjects;
  },

  displayAllStudentsEnlistedToSubject: function (subject) {
    const allStudents = [];
    subject.students.forEach((student) => {
      allStudents.push(student);
    });
    return allStudents;
  },
  addTeacherToSubject: function (teacher) {
    teacher.addSubject(this);
  },
  addSubjectToStudent: function (...students) {
    students.forEach((student) => {
      student.enlistToSubject(this);
    });
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
  displayAllSubjects: function () {
    const allSubjects = [];
    this.subjects.forEach((subject) => {
      allSubjects.push(subject);
    });
    return allSubjects;
  },
  addTeacherToSchool: function(...teachers) {
    teachers.forEach((teacher) => {
      regularSchool.addTeacher(this);
    });
  }
  
};

let teacherJohnson = {
  name: "Johnson",
  subjects: [],
  addSubject: function (subject) {
    this.subjects.push(subject);
    return (subject.teacher = this);
  },

  displayAllSubjects: function () {
    const allSubjects = [];
    this.subjects.forEach((subject) => {
      allSubjects.push(subject);
    });
    return allSubjects;
  },
  addTeacherToSchool: function(teacher) {
    
      regularSchool.addTeacher(teacher);
   
  }
};

//students

let alice = {
  name: "Alice",
  age: 18,
  gender: "Female",
  subjects: [],
  enlistToSubject: function (subject) {
    this.subjects.push(subject);
    subject.addStudent(this);
  },
  quitSubject: function (subject) {
    const index = this.subjects.indexOf(subject);
    if (index !== -1) {
      this.subjects.splice(index, 1);
    }
  },
  enlistStudentToSubject: function (subject) {
    subject.addStudent(this);
  },
};

let bob = {
  name: "Bob",
  age: 17,
  gender: "Male",
  subjects: [],
  enlistToSubject: function (subject) {
    this.subjects.push(subject);
    subject.addStudent(this);
  },
  quitSubject: function (subject) {
    const index = this.subjects.indexOf(subject);
    if (index !== -1) {
      this.subjects.splice(index, 1);
    }
  },
  enlistStudentToSubject: function (subject) {
    subject.addStudent(this);
  },
};

let charlie = {
  name: "Charlie",
  age: 16,
  gender: "Male",
  subjects: [],
  enlistToSubject: function (subject) {
    this.subjects.push(subject);
    subject.addStudent(this);
  },
  quitSubject: function (subject) {
    const index = this.subjects.indexOf(subject);
    if (index !== -1) {
      this.subjects.splice(index, 1);
    }
  },
  enlistStudentToSubject: function (subject) {
    subject.addStudent(this);
  },
};

let diana = {
  name: "Diana",
  age: 18,
  gender: "Female",
  subjects: [],
  enlistToSubject: function (subject) {
    this.subjects.push(subject);
    subject.addStudent(this);
  },
  quitSubject: function (subject) {
    const index = this.subjects.indexOf(subject);
    if (index !== -1) {
      this.subjects.splice(index, 1);
    }
  },
  enlistStudentToSubject: function (subject) {
    subject.addStudent(this);
  },
};

let eva = {
  name: "Eva",
  age: 17,
  gender: "Female",
  subjects: [],
  enlistToSubject: function (subject) {
    this.subjects.push(subject);
    subject.addStudent(this);
  },
  quitSubject: function (subject) {
    const index = this.subjects.indexOf(subject);
    if (index !== -1) {
      this.subjects.splice(index, 1);
    }
  },
  enlistStudentToSubject: function (subject) {
    subject.addStudent(this);
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
  displayAllStudents: function () {
    const allStudents = [];
    for (let student of this.students) {
      allStudents.push(student);
    }
    return allStudents;
  },
  displayAllTeachers: function () {
    allTeachers = [];
    regularSchool.teachers.forEach((teacher) => {
      allTeachers.push(teacher);
    });
    return allTeachers;
  },
  enlistStudentToSchool: function (...students) {
    students.forEach((student) => {
      this.addStudent(student);
    });
  },
};

