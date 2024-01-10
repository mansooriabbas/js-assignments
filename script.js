//### Variables and datatypes

// 1.
// const age = 38
// 2.
// const firstName = "abbas"
//const variable cant be reassigned as its an constant and can be global or local based on where you put it

// let lastName = "Mansoori"
//let can be reassigned but is local or global based on where you put it

// var country = "Sweden"
// var is global always and using var might result in unwanted behaviour

// console.log(firstName, lastName, country );

// 3. Declare three different variables, one of each data type. Assign them values and log them to the console in three different logs.

// let number = 10
// let bool = true
// let string = "Hello"
// console.log(number);
// console.log(bool);
// console.log(string);

// 4. Create a `const` variabel called `name` and assign a value to it. Log it to the console. On a new line, try to reassign the value. Log that to the console. Does it work? If it doesn't, think about why that is. How would you correct it?

// const age = 20
// console.log(age);
// age = 25
// console.log(age);

//it doesnt work because its declared as a constant and to correct it i would use let instead since using const is for values that should never change, so using const for age is initially wrongly declared

// 5. Think about one case when we would like to use a boolean value. Discuss it with another person.

//a case for the usage of boolean value could be in an if statement to check if something is true or false and then continuing the code based on the value, for example: let x = true, let y = false, if x, then do this and if y do the other thing.

// 6. If we create a variable that we know is not going to change its value during the duration of our program, should we declare it using `let` or `const` and why?

//we should use const since using const makes sure we wont accidently change the value later on by reassigning it

// 7. Create two numbers, save them in the variables `number1` and `number2`. Add these two variabels together and save the `result` in a new variable that you log to the console.

// const number1 = 10
// const number2 = 20

// const result = number1 + number2
// console.log(result);

// 8. Reuse the `number1` and `number2` variables and create three new variables:
//    - `result1` should contain the difference (subtraction) between the numbers
//    - `result2` should contain the product (multiplication) of the two numbers
//    - `result3` should contain the quotient (division) of the two numbers
//    - Log them all to the console.

// const number1 = 10
// const number2 = 20

// const result1 = number1 - number2
// const result2 = number1 * number2
// const result3 = number1 / number2

// console.log(result1, result2, result3);

// 9. Create a variable `a` and assign it a value. Log it to the console. Now add 5 to `a` by reassigning the value of `a` by using the existing `a` and the number 5. Log it to the console.

// let a = 10
// console.log(a);
// a += 5
// console.log(a);

// value of a = 15

// 10. What is the value of `a` in the console.log?

// let a = 10;
// a = a - 4;
// a = 7;
// a = a + 2;

// console.log(a); value of a is 9

// Explain each line of code in the previous question for a friend.

// we declare a and give it a value of 10 then we redeclare a with a subtraction of -4 so a is now 6, we now redeclare a and give it a value of 7, in the end we redeclare a that is 7 and add 2 to it so the final value of a is 9

// ## Enkel dataregistrering och miniräknare

// 1. Använd prompt för att fråga användaren efter deras namn. Spara detta i en variabel och använd console.log för att visa ett hälsningsmeddelande som inkluderar deras namn.

// let promptName = prompt("Whats your name");
// console.log(`Hello ${promptName}`);

// 2. Använd prompt för att fråga användaren efter deras födelseår. Spara detta i en variabel.

// let promptAge = prompt("Whats your age");
// let resultAge = promptAge

// 3. Beräkna användarens ålder genom att subtrahera födelseåret från det aktuella året. Du kan få det aktuella året med new Date().getFullYear() eller bara hårdkoda in det. Spara resultatet i en variabel och använd console.log för att visa ett meddelande som inkluderar deras ålder.

// 4. Använd prompt för att fråga användaren efter två nummer. Spara dem i variabler.

// let promptAge = prompt("Whats your age");
// let resultAge = new Date().getFullYear() - promptAge
// console.log(resultAge);

// const promptNumberOne = prompt("type a number",),
// promptNumbeTwo = prompt("type another number",)

// let result1 = promptNumberOne
// let result2 = promptNumbeTwo
// console.log(promptNumberOne, promptNumbeTwo);

// 5. Använd operatorerna +, -, \*, och / för att utföra addition, subtraktion, multiplikation och division på dessa nummer. Använd console.log för att visa resultaten av dessa operationer.

// const promptNumberOne = prompt("type a number"),
//   promptNumberTwo = prompt("type another number");

// let result1 = parseInt(promptNumberOne)
// let result2 = parseInt(promptNumberTwo)
// 6. Använd alert för att meddela användaren att beräkningarna är klara och att de kan kontrollera konsolen för resultaten.

// alert("calculations done, check console!")

// console.log(
//   `subtraction:${promptNumberOne - promptNumberTwo}, Multiplication: ${
//     promptNumberOne * promptNumberTwo
//   } Division: ${promptNumberOne / promptNumberTwo}`
// );

//## Miniräknare

// Okej, nu är det dags att programmera en ordentlig, fast enkel miniräknare i JavaScript. Nedan kommer instruktionerna. Ni behöver som alltid en index.html och en index.js som måste vara ihopkopplade.

// 1. Skapa en prompt som frågar om ett valfritt tal. Spara undan i en variabel.
// alert("This is a calculator")
// const firstNumber = prompt("input a number");

// 2. Skapa en prompt till som frågar om ett annat tal. Spara i en variabel.
// const secondNumber = prompt("input another number");

// 3. Skapa ny en tredje prompt som frågar vilket räknesätt användare vill använda. Det bör framgå att endast +, -, \* och / är möjliga. Denna ska också sparas i en variabel.
// const calculations = prompt(
//   "input the type of calculation, only(+, -, /, *) are available"
//   );
//   alert("Check console for calculations")

// 4. Skapa en if-else-if check där du checkar de olika alternativen. Till exempel. Om räknesättet är lika med addition, så ska en addition utföras mellan de två talen och en alert ska poppa upp och redovisa resultatet. Är det subtraktion som gäller så ska subtraktion ske mellan talen och så vidare.
// if (calculations === "+") {
//   console.log(firstNumber + secondNumber);
// } else if (calculations === "-") {
//   console.log(firstNumber - secondNumber);
// } else if (calculations === "*") {
//   console.log(firstNumber * secondNumber);
// } else if (calculations === "/") {
//   console.log(firstNumber / secondNumber);
// 5. Inkludera en else i slutet som hanterar alla utfall, om till exempel räknesättet skrivs in fel så det inte känns igen eller liknande.
// } else {
//   console.log("not valid, input only one of (+, -, /, *)");
// }
// 6. Lägga gärna till lite skjyssta alerts innan och efter som hälsar en välkommen och säger hejdå och så.

//Functions
// #### Greeting

// const greeting = () => {
//     console.log("Hello there my friend!");
// }

// #### Greeting with name

// const greeting = (name) => {
//     console.log("Hello there my friend!, You must be " + name);
// }

// #### Addition

// const addition = (num1, num2) => {
//   return num1 + num2;
// };
// const addResult = addition(1, 2);
// console.log(addResult);

// #### Division

// function division(a, b) {
//   if ( b === 0) {
//     console.log("division by zero not allowed");
//     return
//   } else {
//     return a / b;
//   }
// }

// const divResult = division(1 , 0)
// console.log(divResult);

// #### Area

// const area = (l, w) => {
//   return `the area of the box is ${
//     l * w
//   } meters2 : length: ${l} and width: ${w}`;
// };

// const areaResult = area(20, 100);
// console.log(areaResult);

// #### Greeting with name again

// const anotherGreeting = (fName, lName) => {
//     return `'Hello ${fName} ${lName} how are you doing?`
// }

// const nameGreeting = anotherGreeting("Abbas", "Mansoori")
// console.log(nameGreeting);

// #### Distance converter

// kilometersToMiles = (k) => {
//     return m = k * 0.6214
// }

// const conversion = kilometersToMiles(20)

// console.log(conversion)

// #### Temperature converter

// const celctoFahrenheit = (celsius) => {

//     const farenheit = celsius * (9 / 5) + 32
//     return farenheit
// }

// const conversionDegrees = celctoFahrenheit(23)
// console.log(conversionDegrees);

// #### Mean value _(Needs knowledge of Arrays)_

// const average = (arr) => {
//   let avg = 0;
//   for (let i = 0; i < arr.length; i++) {
//    avg += arr[i]
//   }
//   return avg / arr.length
// };

// const mean = average([2, 4, 2, 4]);
// console.log(mean);

// #### Systembolaget

// const systembolaget = (age) => {
//   if (age >= 0 && age <= 14) {
//     console.log("Get out of here");
//   } else if (age >= 15 && age <= 17) {
//     console.log("Sorry, you are not old enough");
//   } else if (age >= 18 && age <= 19) {
//     console.log(
//       "Sorry, you must be at least 20. Why don't you try a bar instead?"
//     );
//   } else if (age >= 20 && age <= 80) {
//     console.log("Thank you! Welcome!");
//   } else if (age > 80) {
//     console.log("I'm sorry, where is your caretaker?");
//   } else {
//     console.log("Invalid age entered.");
//   }
// };

// systembolaget(55);

// #### Sum _(Needs knowledge of Arrays)_

// const sumOfArr = (array) => {
//     let result = 0
//     array.forEach(num => {
//         result += num
//     });
//     return result;
// };
// const res = sumOfArr([1,2,3,4,5,6,7,8,9,10])

// console.log(res);

// #### List a persons' skills _(Needs knowledge of Objects)_

// const person = {
//   name: "Tom",
//   age: 35,
//   city: "Stockholm",
//   skills: [
//     "Pokemon Master",
//     "Kung Fu Legend",
//     "Football Ninja",
//     "Master of towers",
//     "Keeper of balls",
//   ],
// };

// const listSkills = (p) => {
//     console.log(p.skills);
// }
// listSkills(person)

// ### Exercises on Arrays.
// const numbers = [2, 6, 12, 7, 22, 35];

// 1. Create a variable where you store the first element of the `numbers` array. Log it to the console.
// const firstindex = numbers[0];
// console.log(firstindex);

// 2. Create a variable where you store the last element of the `numbers` array. Log it to the console.
// const lastIndex = numbers[5]
// console.log(lastIndex);

// 3. Create a variable where you store the fourth element of the `numbers` array. Log it to the console.

// const index4 = numbers[3]
// console.log(index4);

// 4. Store the second and the fifth element of the `numbers` array in variables. Create a new array and populate it with those two variables. Log it to the console.

// const secondindex = numbers[2]
// const fifthdindex = numbers[5]
// const secondfifth = [secondindex, fifthdindex]
// console.log(secondfifth);

// 5. What is the length of the `numbers` array? Use the correct array property to save that number to a variable and log it to the console.

// const numberslength = numbers.length
// console.log(numberslength);

// 6. Add an arbitrary number to the end of the `numbers` array with the correct array method. This array method returns a value. Save that to a variable and log it to the console. What does this number represent?

// const newnr = numbers.push([77])
// console.log(newnr);

// 7. Add an arbitrary number to the start of the `numbers` array using the correct array method. This method also returns a value. Log it to the console and reflect on what this value means.

// const newNumber = numbers.unshift(88)
// console.log(newNumber);

// 8. By now the `numbers` array should have been modified a couple of times. Let's shrink it again. Remove the last element from the array with an array method. This method should return a value as well. Log it to the console as see what it is.

// const removeLast = numbers.pop()
// console.log(removeLast);

// 9. Do the same as the last one, but remove it from the beginning instead. Log the return value to the console.

// const removeFirst = numbers.shift()
// console.log(removeFirst);

// 10. If we have done the last couple of exercises correctly, we should have the same content as the default array. Log it out the console and see for yourself.

// console.log(numbers);

// ### Arrays exercises 2
