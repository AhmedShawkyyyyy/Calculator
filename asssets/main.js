// Define Variables
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const operators = ["%", "*", "/", "-", "+", "="];
let output = "";
console.log(buttons);
console.log(display);

// Definr Function to calculate based on button click
const calculate = (btnValue) => {
  console.log(btnValue);
  if (btnValue === "=" && btnValue !== "") {
    // if output has"%" , repleace with "/100" . before evalutaion
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    // if DEL button is clicked, remove the last character from the output
    output = output.toString().slice(0, -1);
  } else {
    // if output is emptu and button is a operator then return(undefined)
    if (output === "" && operators.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

// Add Event listner to buttons, call calculate () on click //

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
