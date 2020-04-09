/*
function createDiv() {

  let div = document.createElement("div");
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.border = "solid 1px black";
  div.style.background = "white";
  div.style.color = "black";
  div.innerHTML = "Hello";

  document.getElementById("div1").appendChild(div);

};

createDiv();
*/
function createDiv() {
let i;
for (i = 0; i < 16; i++) {

    let div = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.border = "solid 1px black";
    div.style.background = "white";
    div.style.color = "black";
    div.innerHTML = "Hello";

    document.getElementById("div1").appendChild(div);

  }
}

createDiv();
