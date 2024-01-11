//###Object

// ### Create an Object:
// Create an object representing a person with properties like name, age, and city.

const person = {
  name: "Michael",
  age: 39,
  city: "Stockholm",
};

// ### Access Object Properties:
// Access and print the values of the person's properties.

console.log(person.name, person.age, person.city);

// ### Modify Object Properties:
// Modify the age of the person and add a new property for their email.

person.email = "Michael@gmail.com";
person.age = 40;
console.log(person);

// ### Object with Methods:
// Create an object representing a car with properties like make, model, and a method to display its details.

const car = {
  make: "Nissan",
  model: "Skyline GT-R PGC10",
  turbo: function (type) {
    console.log(`Turbo: ${type}`);
  },
};

// ### Loop through Object Properties:
// Loop through the person object from exercise 1 and print each property and its value.

const entriesArray = Object.entries(person);

entriesArray.forEach(([key, value]) => console.log(`${key}: ${value}`));

// ### Object with Nested Properties:
// Create an object representing a student with nested properties for subjects and grades.

const student = {
  name: "Taylor",
  age: 25,
  grade: 3,
  subjects: {
    math: 90,
    science: 85,
    history: 95,
    english: 88,
  },
};

// ### Modify Nested Object Property:
// Modify the science grade of the student from the previous exercise.

student.subjects.science = 99;

// ### Array of Objects:
// Create an array of objects representing different books with properties like title and author.

const arrayOfBooks = [
  { title: "Lord of the rings", author: "JR Tolkien" },
  { title: "Harry Potter", author: "JK Rowling" },
];

// ### Loop through Array of Objects:
// Loop through the books array from the previous exercise and print the title and author of each book.

arrayOfBooks.forEach((book) => {
  console.log(book.title, book.author);
});
