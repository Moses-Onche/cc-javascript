let topics = document.getElementsByClassName('sub-heading');
let paragraphs = document.getElementsByTagName('p');
let main = document.getElementById('main-heading');

main.style.color = 'blue';

for (let i = 0; i < topics.length; i++){
  topics[i].style.color = 'green';
  topics[i].style.fontSize = '50px';
}

topics[1].style.border = 'solid 1px black';

let third = document.createElement('h2');
third.innerHTML = 'Third topic'
third.style.color = "pink";
third.style.fontSize
console.log(paragraphs[1]);
paragraphs[1].appendChild(third);