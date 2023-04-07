let a = 0;
let b = "";
let operator = "";

let displayValue = "";

//Add EventListener to "." Button
const decimalButton = document.querySelector("#keyDecimal");
decimalButton.addEventListener("click", () => {
  displayValue += ".";
  if (/[\+\-\/\*]/g.test(displayValue)) {
    b += ".";
    console.log(b);
    console.log("yeah");
  } else {
    a = +displayValue;
    console.log(a);
    console.log("hi");
  }
  display();
});

//Add EventListener to "Clear" Button
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
  a = 0;
  b = "";
  operator = "";
  displayValue = "";
  display();
});

// Add EventListener to "=" button
const equalButton = document.querySelector("#equal");
equalButton.addEventListener("click", () => {
  if (b === "" && operator !== "") {
    b = a;
    a = operate(a, operator, b);
    displayValue = `${a}`;
    // b = "";
    console.log("hoo");
  } else if (b === "" && operator === "") {
    displayValue = `${a}`;
    console.log("yei");
  } else {
    b = +b;
    a = operate(a, operator, b);
    console.log(a);
    displayValue = `${a}`;
    console.log(displayValue);
    console.log(typeof displayValue);
    console.log("wah");
  }
  display();
  displayValue = "";
});

//Add EventListener to operator buttons
const opButtons = document.querySelectorAll("#plus, #minus, #multi, #divide");
opButtons.forEach((opButton) => {
  opButton.addEventListener("click", () => {
    if (/[\+\-\/\*]/g.test(displayValue)) {
      if (b === "") {
        displayValue = `${a}`;
        console.log("b leer");
      } else {
        b = +b;
        console.log("hallo");
        console.log(b);
        console.log(typeof b);
        a = operate(a, operator, b);
        displayValue = `${a}`;
        b = "";
        console.log("b leer");
      }
    } else if (displayValue === "") {
      displayValue = `${a}`;
    }

    operator = opButton.textContent;
    displayValue += operator;
    display();
    b = "";
  });
});

//Add EventListener to number buttons
for (let i = 0; i < 10; i++) {
  const numButton = document.querySelector(`#key${i}`);
  numButton.addEventListener("click", () => {
    if (/[\+\-\/\*]/g.test(displayValue)) {
      b += `${i}`;
      displayValue += `${i}`;
      console.log(b);
    } else {
      // if (operator === "") {
      //   displayValue = `${i}`;
      //   a = +displayValue;
      //   console.log(a);
      // } else {
      displayValue += `${i}`;
      a = +displayValue;
      console.log(a);
      // }
    }

    display();
  });
}

//Function for rounding decimals preventing overflow
function round(num) {
  const rounded = Math.round(num * 10 ** 6) / 10 ** 6;
  console.log(rounded);
  return rounded;
}

//Function for displaying stored value
function display() {
  const display = document.querySelector("#display");
  display.textContent = displayValue;
}

//Operator function
function operate(a, operator, b) {
  if (operator === "+") return round(add(a, b));
  else if (operator === "-") return round(subtract(a, b));
  else if (operator === "*") return round(multiply(a, b));
  else if (operator === "/") return round(divide(a, b));
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
  if (b == 0) {
    return "LOL, you kidding?";
  }
  console.log(a / b);
  return a / b;
}
