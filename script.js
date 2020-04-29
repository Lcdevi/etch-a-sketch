let cont = document.getElementById("container");
let eraseBtn = document.getElementById("btnerase");
let newGridBtn = document.getElementById("btncreategrid");
let colorBtn = document.getElementById("btncolor");
let blackBtn = document.getElementById("btnblack");
let playerChoice = 0;
let totalCases = 0;
let size = 0;
let i = 0;
let minus = 0;
let newDiv = 0;
let color = 0;
let pink = newDiv.className="pink";
let black = newDiv.className="black";

createGridInit();
colorBlack();

function createGridInit () {
  createGrid(playerChoice = 35);
  }

function createGrid (playerChoice) {
  totalCases = playerChoice * playerChoice;
  size = 500/playerChoice;
  minus = playerChoice-1;
  cont.style.gridTemplateColumns= "repeat("+minus+", " + size + "px) 1fr";
  cont.style.gridTemplateRows= "repeat("+minus+", " + size + "px) 1fr";

  for (i = 0; i<totalCases; i++) {
    newDiv = document.createElement("div");
    newDiv.className="newdiv";
    cont.appendChild(newDiv);
    }
  }

function erase(){
  let last=cont.lastElementChild;
  while(last){
    cont.removeChild(last);
    last=cont.lastElementChild;
    }
  }

eraseBtn.addEventListener("click", function(e){
  erase();
  createGrid(playerChoice);
  });

newGridBtn.addEventListener("click", function(e){
  playerChoice = prompt("Choose e number between 2 and 100","");
  playerChoice = parseInt(playerChoice);
    if (playerChoice < 2 || playerChoice > 100 || isNaN(playerChoice)) {
      do {playerChoice = prompt("Choose e number between 2 and 100","");}
      while (playerChoice < 2 || playerChoice > 100 || isNaN(playerChoice));
      playerChoice = parseInt(playerChoice);
      erase();
      createGrid(playerChoice);
    } else {
    erase();
    createGrid(playerChoice);}
  })

function colorBlack(){
  cont.addEventListener("mouseover",function(e){
    e.target.style.background = black;
    }, false);
  }

blackBtn.addEventListener("click", function(){
  colorBlack();
  })

function colorMulti(){
  cont.addEventListener("mouseover",function(e){
    e.target.style.background = randColor;
    }, false);
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let randColor = "rgb(" + red + "," + green + "," + blue + ")";
    console.log(randColor)
  }

colorBtn.addEventListener("click", function(){
    colorMulti();
    })
