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
