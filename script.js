let a;
let b;
let operator;

let displayValue = "";

// Add EventListener to "=" button
const equalButton = document.querySelector("#equal");
equalButton.addEventListener("click", () => {
  console.log(operate(a, operator, b));
  displayValue = operate(a, operator, b);
  display();
});

//Add EventListener to operator buttons
const opButtons = document.querySelectorAll("#plus, #minus, #multi, #divide");
opButtons.forEach((opButton) => {
  opButton.addEventListener("click", () => {
    a = displayValue;
    operator = opButton.textContent;
    displayValue += `${operator}`;
    console.log(operator);
    console.log(a);
    display();
  });
});

//Add EventListener to number buttons
for (let i = 0; i < 10; i++) {
  const numButton = document.querySelector(`#key${i}`);
  numButton.addEventListener("click", () => {
    if (/[\+\-\*\/]{1,}$/.test(displayValue)) {
      b = i;
      displayValue += i;
      console.log(b);
    } else {
      displayValue = i;
    }

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
