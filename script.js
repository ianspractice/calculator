const buttons = Array.from(document.querySelectorAll("button"));
const display = document.querySelector("#display");
const divRows = Array.from(document.querySelectorAll(".row"));
const numberBtns = Array.from(document.querySelectorAll(".number"));
const opBtns = Array.from(document.querySelectorAll(".operator"));
const opAndNumBtns = Array.from(
  document.querySelectorAll(".number, .operator, .decimal")
);

const equalBtn = document.querySelector(".equal");
const decimal = document.querySelector(".decimal");

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
  display.textContent = operate(number1, operator, number2).toFixed(10) * 1;
}
function clearDisplay() {
  display.textContent = 0;
  number = "";
  number1 = "";
  number2 = "";
  operator = "";
  console.clear();
  decimal.removeAttribute("disabled");
  return;
}

//get user input; store as variables to use in functions; operate on them when user presses "="
function calculate(e) {
  const target = e.target.textContent;
  if (target === "CLEAR ALL") {
    return clearDisplay();
  }
  if (
    (target === "+" || target === "-" || target === "/" || target === "x") &&
    operator === ""
  ) {
    operator = target;
    number1 = Number(display.textContent);
    display.textContent = "";
    number = "";
    decimal.removeAttribute("disabled");
    return;
  }
  if (
    (target === "+" || target === "-" || target === "/" || target === "x") &&
    operator !== ""
  ) {
    number2 = Number(display.textContent);
    if (number2 === 0 && operator === "/") {
      number1 = 0;
      number = "";
      operator = "";
      display.textContent = "no dividing by 0!";
      decimal.removeAttribute("disabled");
      return;
    } else {
      number = "";
      console.log(`number1: ${number1}`);
      console.log(`number2: ${number2}`);
      popDisplay();
      number1 = operate(number1, operator, number2);
      operator = target;
      decimal.removeAttribute("disabled");
      return;
    }
  }
  if (target === "=") {
    if (operator === "") {
      return;
    }
    number2 = Number(display.textContent);
    if (number2 === 0 && operator === "/") {
      number1 = 0;
      number = "";
      operator = "";
      display.textContent = "no dividing by 0!";
      decimal.removeAttribute("disabled");
      return;
    } else {
      popDisplay();
      number1 = operate(number1, operator, number2);
      number = "";
      operator = "";
      decimal.removeAttribute("disabled");
      return;
    }
  }
  if (target === ".") {
    decimal.toggleAttribute("disabled");
  }
  if (target === "DELETE") {
    number = number.slice(0, number.length - 1);
    display.textContent = number;
    if (!number.includes(".")) {
      decimal.removeAttribute("disabled");
    }
    return;
  }
  number += target;

  display.textContent = number;
}

opAndNumBtns.map((btn) => {
  btn.addEventListener("click", calculate);
});

// opBtns.map((btn) => {
//   btn.addEventListener("click", calculate);
// });

// decimal.addEventListener("click", () => {
//   decimal.removeEventListener("click", calculate);
// });

//change number buttons' colors when clicked
numberBtns.map((btn) => {
  btn.addEventListener("mousedown", changeNumColor1);
  btn.addEventListener("mouseup", changeNumColor2);
});

//change operator buttons' colors when clicked
opBtns.map((btn) => {
  btn.addEventListener("mousedown", changeOpColor1);
  btn.addEventListener("mouseup", changeOpColor2);
});

equalBtn.addEventListener("mousedown", changeEqualColor1);
equalBtn.addEventListener("mouseup", changeEqualColor2);

decimal.addEventListener("mousedown", changeNumColor1);
decimal.addEventListener("mouseup", changeNumColor2);

const string1 = 23.23;
const string2 = 23;
const strNum = string1 + string2;
console.log(`strNum: ${strNum}`);
const fixedStr = strNum.toFixed(string1.toString().length);
console.log(string1.length);
console.log(`fixedStr: ${fixedStr}`);
