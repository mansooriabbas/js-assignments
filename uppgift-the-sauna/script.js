
// ### The Sauna

const sauna = () => {
  let input = parseInt(prompt("Enter temperature in farenheit."));
  while (input < 73 || input > 77) {
    if (input < 73) {
      input = parseInt(
        prompt("Temperature is to cold, set the temp between 73 - 77")
      );
    } else if (input > 77) {
      input = parseInt(prompt("To hot, set the temp between 73 - 77"));
    }
  }
  console.log(
    `The temperature is now ${convertToFahrenheit(input)} degrees75, enjoy!`
  );
};
const convertToFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};
sauna();