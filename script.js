let draw = document.getElementById("main");
let playerChoice = Number(window.prompt("Enter a number", ""));;
//let playerChoice = 50;
//function to create new divs
function createDiv() {
let numberOfCases = playerChoice * playerChoice;
let i;
for (i = 0; i < numberOfCases; i++) {
let size = (450/Math.sqrt(numberOfCases))-2;
  let div = document.createElement("div");

    div.style.width = size + "px";
    div.style.height = size +"px";
    div.style.border = "solid 1px white";
    div.style.background = "#fcf176";

    document.getElementById("grid").appendChild(div);


    console.log(size);
  }
  draw.addEventListener("mouseover", function( event ) {
    // on met l'accent sur la cible de mouseover
    event.target.style.backgroundColor = "black";

  }, false);

}

createDiv();
