let btn = document.querySelector(".button");
let text = document.querySelectorAll("p");
let btnCase = document.querySelector(".case");
let check = true;

btn.addEventListener("click", function(){
  if (check) {
    document.body.style.backgroundColor = "black";
    for (let i = 0; i < text.length; i++) {
      text[i].style.color = "white";
    }
    btnCase.style.border = "1px solid white";
    this.style.backgroundColor = "white";
    this.style.float = "right";
    check = false;
  } else {
    document.body.style.backgroundColor = "white";
    for (let i = 0; i < text.length; i++) {
      text[i].style.color = "black";
    }
    btnCase.style.border = "1px solid black";
    this.style.backgroundColor = "black";
    this.style.float = "left";
    check = true;
  }
});