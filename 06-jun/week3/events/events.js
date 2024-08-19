// let heading = document.getElementById('test');

// heading.addEventListener("click", () => {
//   heading.style.color = "red";
// })

// function changeToBlue(){
//   heading.style.color = "blue";
// }

// document.body.onload = function(){ alert('When a page loads') };

document.body.onload = setTimeout(displaySubscriptionBox, 3000);

function displaySubscriptionBox(){
  let subContainer = document.getElementsByClassName('sub-container');
  subContainer[0].style.display = 'block';
}

// displaySubscriptionBox();

// document.body.onunload = alert('Are you sure you want to leave?');

let input = document.getElementsByTagName('input')[0];

input.oninput = function(){
  input.value = input.value.toUpperCase()
};
