let paragraphs = document.querySelectorAll("p");
let heading1 = document.querySelectorAll("h1");
let heading2 = document.querySelectorAll("h2");
let heading3 = document.querySelectorAll("h3");
let heading4 = document.querySelectorAll("h4");
let heading5 = document.querySelectorAll("h5");
let body = document.querySelector("body");
let trigger = true;
let toggle = document.querySelector("#mode-switch");

toggle.addEventListener("click", function(){
  if (trigger){
    trigger = false;
    toggle.setAttribute("src", "dark.png");

  } else {
    trigger = true;
    toggle.setAttribute("src", "light.png");
    
  }
})