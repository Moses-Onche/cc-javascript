let heading = document.querySelectorAll("h4");
let paragraph = document.querySelectorAll(".faq");
console.log(heading);
console.log(paragraph);
let trigger = true;

for (let i = 0; i < heading.length; i++){
  heading[i].addEventListener("click", function(){
    if (trigger === true){
      paragraph[i].style.display = "block";
      trigger = false;
    } else {
      paragraph[i].style.display = "none";
      trigger = true;
    }
  });
}

