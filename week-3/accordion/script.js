var acc = document.getElementsByClassName("accordion");
// var sign = document.getElementById('sign');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    var sign = panel.children;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      sign.src = "images/plus.png"
    } else {
      panel.style.display = "block";
      sign.src = "images/minus.png"
    }
  });
}