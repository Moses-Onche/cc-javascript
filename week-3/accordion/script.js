var acc = document.getElementsByClassName("accordion");
var i;


for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    var sign = this.children[0];
    
    if (panel.style.display === "block") {
      panel.style.display = "none";
      sign.setAttribute("src", "images/plus.png");
    } else {
      panel.style.display = "block";
      sign.setAttribute("src", "images/minus.png");
    }
  });
}