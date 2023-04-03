let a;
let b;
let operator;

let displayValue;

//Add EventListener to number buttons
for (let i = 0; i < 10; i++) {
  const numButton = document.querySelector(`#key${i}`);
  numButton.addEventListener("click", () => {
    displayValue = i;
    display();
  });
}

//Function for displaying stored value
function display() {
  const display = document.querySelector("#display");
  display.textContent = displayValue;
}

//Operator function
function operate(a, operator, b) {
  if (operator === "+") return add(a, b);
  else if (operator === "-") return subtract(a, b);
  else if (operator === "*") return multiply(a, b);
  else if (operator === "/") return divide(a, b);
}

// Basic mathematical functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
