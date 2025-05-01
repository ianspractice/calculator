const buttons = Array.from(document.querySelectorAll("button"));
const display = document.querySelector("#display");
const divRows = Array.from(document.querySelectorAll(".row"));

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
    console.log(e.target.textContent);
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
  return (a / b).toFixed(5);
}
function operate(a, op, b) {
  if (op === "+") {
    console.log(add(a, b));
    return add(a, b);
  } else if (op === "-") {
    console.log(subtract(a, b));
    return subtract(a, b);
  } else if (op === "*") {
    console.log(multiply(a, b));
    return multiply(a, b);
  } else if (op === "/") {
    console.log(divide(a, b));
    return divide(a, b);
  }
}
//create function to populate "display"
function popDisplay(input) {
  display.textContent = input;
}
//get user input; store as variables to use in functions; operate on them when user presses "="
