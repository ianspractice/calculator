const buttons = Array.from(document.querySelectorAll("button"));
const display = document.querySelector("#display");
const divRows = Array.from(document.querySelectorAll(".row"));
const numberBtns = Array.from(document.querySelectorAll(".number"));
const opBtns = Array.from(document.querySelectorAll(".operator"));
const equalBtn = document.querySelector(".equal");

let number = "";
let number1 = "";
let number2 = "";
let operator = "";
display.textContent = 0;
//change background colors
function changeNumColor1(e) {
  e.target.style.backgroundColor = "rgb(95, 34, 126)";
}
function changeNumColor2(e) {
  e.target.style.backgroundColor = "rgb(254, 184, 213)";
}
function changeOpColor1(e) {
  e.target.style.backgroundColor = "rgb(10, 10, 194)";
}
function changeOpColor2(e) {
  e.target.style.backgroundColor = "rgb(102, 102, 244)";
}
function changeEqualColor1(e) {
  e.target.style.backgroundColor = "rgb(62, 6, 114)";
}
function changeEqualColor2(e) {
  e.target.style.backgroundColor = "rgb(138, 43, 226)";
}

//operator functions
function add(a, b) {
  if (!a) {
    return 0 + b;
  }
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (a % b !== 0) {
    return (a / b).toFixed(5);
  }
  return a / b;
}
function operate(a, op, b) {
  if (op === "+") {
    console.log(`${number1} + ${number2} = ${add(a, b)}`);
    return add(a, b);
  } else if (op === "-") {
    console.log(`${number1} - ${number2} = ${subtract(a, b)}`);
    return subtract(a, b);
  } else if (op === "x") {
    console.log(`${number1} * ${number2} = ${multiply(a, b)}`);
    return multiply(a, b);
  } else if (op === "/") {
    console.log(`${number1} / ${number2} = ${divide(a, b)}`);
    return divide(a, b);
  }
}
//create function to populate "display"
function popDisplay() {
  display.textContent = operate(number1, operator, number2);
}
function clearDisplay() {
  display.textContent = "";
}

//get user input; store as variables to use in functions; operate on them when user presses "="
function calculate(e) {
  if (e.target.textContent === "CLEAR ALL") {
    display.textContent = 0;
    number = "";
    number1 = "";
    number2 = "";
    operator = "";
    console.clear();
    return;
  }
  if (
    (e.target.textContent === "+" && operator === "") ||
    (e.target.textContent === "-" && operator === "") ||
    (e.target.textContent === "/" && operator === "") ||
    (e.target.textContent === "x" && operator === "")
  ) {
    operator = e.target.textContent;
    number1 = Number(display.textContent);
    display.textContent = "";
    number = "";
    return;
  }
  if (
    (e.target.textContent === "+" && operator !== "") ||
    (e.target.textContent === "-" && operator !== "") ||
    (e.target.textContent === "/" && operator !== "") ||
    (e.target.textContent === "x" && operator !== "")
  ) {
    number2 = Number(display.textContent);
    if (number2 === 0 && operator === "/") {
      number1 = 0;
      number = "";
      operator = "";
      display.textContent = "no dividing by 0!";
      return;
    } else {
      number = "";
      popDisplay();
      number1 = operate(number1, operator, number2);
      operator = e.target.textContent;
      return;
    }
  }
  if (e.target.textContent === "=") {
    if (operator === "") {
      return;
    }
    number2 = Number(display.textContent);
    if (number2 === 0 && operator === "/") {
      number1 = 0;
      number = "";
      operator = "";
      display.textContent = "no dividing by 0!";
      return;
    } else {
      console.log(`number1: ${number1}`);
      console.log(`number2: ${number2}`);
      popDisplay();
      number1 = operate(number1, operator, number2);
      number = "";
      operator = "";
      return;
    }
  }
  number += e.target.textContent;
  display.textContent = number;
}

divRows.map((row) => {
  row.addEventListener("click", calculate);
});

//change number buttons' colors when clicked
numberBtns.map((row) => {
  row.addEventListener("mousedown", changeNumColor1);
  row.addEventListener("mouseup", changeNumColor2);
});

//change operator buttons' colors when clicked
opBtns.map((row) => {
  row.addEventListener("mousedown", changeOpColor1);
  row.addEventListener("mouseup", changeOpColor2);
});

equalBtn.addEventListener("mousedown", changeEqualColor1);
equalBtn.addEventListener("mouseup", changeEqualColor2);
