let topics = document.getElementsByTagName("h2");
let popUp = document.getElementsByClassName("pop-up");
// console.log(popUp[0].children[0]);
console.log(popUp[0].children);

for (let i = 0; i <= 3; i++) {
  topics[i].addEventListener("click", function () {
    popUp[i].style.display = "block";
    popUp[i].style.opacity = 1;
    // popUp[i].style.transition = 'all 4s ease-in';
  });

  popUp[i].children[0].addEventListener("click", function () {
    popUp[i].style.display = "none";
  });
}

// topics[0].addEventListener('click', function(){
//   popUp[0].style.display = "block";
// })

// popUp[0].children[0].addEventListener('click', function(){
//   popUp[0].style.display = "none";
// });

// topics[1].addEventListener('click', function(){
//   popUp[1].style.display = "block";
// })

// popUp[1].children[0].addEventListener('click', function(){
//   popUp[1].style.display = "none";
// });

// topics[2].addEventListener('click', function(){
//   popUp[2].style.display = "block";
// })

// popUp[2].children[0].addEventListener('click', function(){
//   popUp[2].style.display = "none";
// });
