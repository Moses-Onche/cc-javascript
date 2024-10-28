let btn = document.querySelector("button");
console.log(btn);

btn.addEventListener("click", function(){
  this.innerHTML = "BOOM!";
  this.style.transition = "all 4s";
  this.style.backgroundColor = "red";
  this.style.fontSize = "150px";
  this.style.color = "white";
  this.style.padding = "50px";
});