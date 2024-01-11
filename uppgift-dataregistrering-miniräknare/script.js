
// ## Enkel dataregistrering och miniräknare

// 1. Använd prompt för att fråga användaren efter deras namn. Spara detta i en variabel och använd console.log för att visa ett hälsningsmeddelande som inkluderar deras namn.

let promptName = prompt("Whats your name");
console.log(`Hello ${promptName}`);

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

const promptNumberOne = prompt("type a number"),
  promptNumberTwo = prompt("type another number");

let result1 = parseInt(promptNumberOne)
let result2 = parseInt(promptNumberTwo)
// 6. Använd alert för att meddela användaren att beräkningarna är klara och att de kan kontrollera konsolen för resultaten.

alert("calculations done, check console!")

console.log(
  `subtraction:${promptNumberOne - promptNumberTwo}, Multiplication: ${
    promptNumberOne * promptNumberTwo
  } Division: ${promptNumberOne / promptNumberTwo}`
);
