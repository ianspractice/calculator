const buttons = document.querySelectorAll("button");

function changeColor1(e) {
  e.target.style.backgroundColor = "purple";
}

function changeColor2(e) {
  e.target.style.backgroundColor = "pink";
}
let buttonArray = Array.from(buttons);
console.log(buttonArray);

buttonArray.map((number) => {
  number.addEventListener("mousedown", changeColor1);
  number.addEventListener("mouseup", changeColor2);
});
