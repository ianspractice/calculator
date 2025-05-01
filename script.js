const buttons = Array.from(document.querySelectorAll("button"));
const display = document.querySelector("#display");
const divRows = Array.from(document.querySelectorAll(".row"));

let number = "";
let number1 = "";
let number2 = "";
let operator = "";
//change background colors
function changeColor1(e) {
  e.target.style.backgroundColor = "purple";
}
function changeColor2(e) {
  e.target.style.backgroundColor = "pink";
}
//change buttons colors when clicked
divRows.map((row) => {
  row.addEventListener("mousedown", changeColor1);
  row.addEventListener("mouseup", changeColor2);
  row.addEventListener("click", (e) => {
    if (e.target.textContent === "CLEAR") {
      display.textContent = "";
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
      number = "";
      popDisplay();
      number1 = operate(number1, operator, number2);
      operator = e.target.textContent;

      return;
    }
    if (e.target.textContent === "=") {
      if (operator === "") {
        return;
      }
      number2 = Number(display.textContent);
      console.log(`number1: ${number1}`);
      console.log(`number2: ${number2}`);
      popDisplay();
      number1 = operate(number1, operator, number2);
      number = "";
      operator = "";
      return;
    }
    number += e.target.textContent;
    display.textContent = number;
  });
});

//operator functions
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
