
let playerChoice = Number(window.prompt("Enter a number", ""));
let totalCases = playerChoice * playerChoice;
let minus = playerChoice-1;
let size = (450/playerChoice);
let gridexjs = document.getElementById("gridex");
gridexjs.style.display = "grid";
gridexjs.style.width = "450px";
gridexjs.style.height="450px";
gridexjs.style.gridTemplateColumns= "repeat("+minus+", " + size + "px) 1fr";
gridexjs.style.gridTemplateRows= "repeat("+playerChoice+", " + size + "px) 1fr";

function createDiv2 () {
  let i;
  for (i = 0; i < totalCases; i++) {
let div2 = document.createElement("div");
div2.style.border = "solid 1px white";
div2.style.background = "#fcf176";
document.getElementById("gridex").appendChild(div2);
}
};
createDiv2();

gridexjs.addEventListener("mouseover", function( event ) {
  event.target.style.backgroundColor = "black";

}, false);
console.log(size);
console.log(minus);
console.log(totalCases);
