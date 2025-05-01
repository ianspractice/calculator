const buttons = Array.from(document.querySelectorAll("button"));

const divRows = Array.from(document.querySelectorAll(".row"));

function changeColor1(e) {
  e.target.style.backgroundColor = "purple";
}

function changeColor2(e) {
  e.target.style.backgroundColor = "pink";
}

divRows.map((row) => {
  row.addEventListener("mousedown", changeColor1);
  row.addEventListener("mouseup", changeColor2);
});

//create add function
function add(a, b) {
  return a + b;
}

// create subtract function
function subtract(a, b) {
  return a - b;
}

//create multiply function
function multiply(a, b) {
  return a * b;
}

//create divide function
function divide(a, b) {
  return (a / b).toFixed(5);
}

//create "operate" function; takes operator and two numbers and calls one of the above functions
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

//get user input; store as variables to use in functions; operate on them when user presses "="

operate(2, "+", 3);
