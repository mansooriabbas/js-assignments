


//Functions
// #### Greeting

// const greeting = () => {
//     console.log("Hello there my friend!");
// }

// #### Greeting with name

const greeting = (name) => {
    console.log("Hello there my friend!, You must be " + name);
}

// #### Addition

const addition = (num1, num2) => {
  return num1 + num2;
};
const addResult = addition(1, 2);
console.log(addResult);

// #### Division

function division(a, b) {
  if ( b === 0) {
    console.log("division by zero not allowed");
    return
  } else {
    return a / b;
  }
}

const divResult = division(1 , 0)
console.log(divResult);

// #### Area

const area = (l, w) => {
  return `the area of the box is ${
    l * w
  } meters2 : length: ${l} and width: ${w}`;
};

const areaResult = area(20, 100);
console.log(areaResult);

// #### Greeting with name again

const anotherGreeting = (fName, lName) => {
    return `'Hello ${fName} ${lName} how are you doing?`
}

const nameGreeting = anotherGreeting("Abbas", "Mansoori")
console.log(nameGreeting);

// #### Distance converter

kilometersToMiles = (k) => {
    return m = k * 0.6214
}

const conversion = kilometersToMiles(20)

console.log(conversion)

// #### Temperature converter

const celctoFahrenheit = (celsius) => {

    const farenheit = celsius * (9 / 5) + 32
    return farenheit
}

const conversionDegrees = celctoFahrenheit(23)
console.log(conversionDegrees);

// #### Mean value _(Needs knowledge of Arrays)_

const average = (arr) => {
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
   avg += arr[i]
  }
  return avg / arr.length
};

const mean = average([2, 4, 2, 4]);
console.log(mean);

// #### Systembolaget

const systembolaget = (age) => {
  if (age >= 0 && age <= 14) {
    console.log("Get out of here");
  } else if (age >= 15 && age <= 17) {
    console.log("Sorry, you are not old enough");
  } else if (age >= 18 && age <= 19) {
    console.log(
      "Sorry, you must be at least 20. Why don't you try a bar instead?"
    );
  } else if (age >= 20 && age <= 80) {
    console.log("Thank you! Welcome!");
  } else if (age > 80) {
    console.log("I'm sorry, where is your caretaker?");
  } else {
    console.log("Invalid age entered.");
  }
};

// systembolaget(55);

// #### Sum _(Needs knowledge of Arrays)_

const sumOfArr = (array) => {
    let result = 0
    array.forEach(num => {
        result += num
    });
    return result;
};
const res = sumOfArr([1,2,3,4,5,6,7,8,9,10])

// console.log(res);

// #### List a persons' skills _(Needs knowledge of Objects)_

const person = {
  name: "Tom",
  age: 35,
  city: "Stockholm",
  skills: [
    "Pokemon Master",
    "Kung Fu Legend",
    "Football Ninja",
    "Master of towers",
    "Keeper of balls",
  ],
};

const listSkills = (p) => {
    console.log(p.skills);
}
listSkills(person)