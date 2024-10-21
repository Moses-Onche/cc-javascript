// console.log(document);
let heading = document.getElementById("main-heading");
let items = document.getElementById("list");
let sub = document.getElementsByClassName("sub-heading");
let paragraph = document.getElementsByTagName("p");

// console.log(heading);
heading.innerHTML = "Heading changed";
// console.log(items.textContent);
console.log(sub[1]);

for (let i = 0; i < sub.length; i++){
  sub[i].innerHTML = "New sub heading";
}
console.log(paragraph[1]);

let third = document.createElement("h2");
third.innerHTML = "Third Topic";
paragraph[1].appendChild(third);

paragraph[2].style.color = "green";
sub[0].style.fontSize = "40px";
paragraph[1].style.fontSize = "20px";
paragraph[0].style.backgroundColor = "blue"
paragraph[0].style.color = "white";

let newColor = Math.trunc(Math.random() * 900000);
// console.log(newColor);

paragraph[1].style.backgroundColor = "#" + newColor;