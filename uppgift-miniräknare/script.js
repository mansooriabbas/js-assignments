//## Miniräknare

// Okej, nu är det dags att programmera en ordentlig, fast enkel miniräknare i JavaScript. Nedan kommer instruktionerna. Ni behöver som alltid en index.html och en index.js som måste vara ihopkopplade.

// 1. Skapa en prompt som frågar om ett valfritt tal. Spara undan i en variabel.
alert("This is a calculator")
const firstNumber = prompt("input a number");

// 2. Skapa en prompt till som frågar om ett annat tal. Spara i en variabel.
const secondNumber = prompt("input another number");

// 3. Skapa ny en tredje prompt som frågar vilket räknesätt användare vill använda. Det bör framgå att endast +, -, \* och / är möjliga. Denna ska också sparas i en variabel.
const calculations = prompt(
  "input the type of calculation, only(+, -, /, *) are available"
  );
  alert("Check console for calculations")

// 4. Skapa en if-else-if check där du checkar de olika alternativen. Till exempel. Om räknesättet är lika med addition, så ska en addition utföras mellan de två talen och en alert ska poppa upp och redovisa resultatet. Är det subtraktion som gäller så ska subtraktion ske mellan talen och så vidare.
if (calculations === "+") {
  console.log(firstNumber + secondNumber);
} else if (calculations === "-") {
  console.log(firstNumber - secondNumber);
} else if (calculations === "*") {
  console.log(firstNumber * secondNumber);
} else if (calculations === "/") {
  console.log(firstNumber / secondNumber);
// 5. Inkludera en else i slutet som hanterar alla utfall, om till exempel räknesättet skrivs in fel så det inte känns igen eller liknande.
} else {
  console.log("not valid, input only one of (+, -, /, *)");
}
// 6. Lägga gärna till lite skjyssta alerts innan och efter som hälsar en välkommen och säger hejdå och så.
