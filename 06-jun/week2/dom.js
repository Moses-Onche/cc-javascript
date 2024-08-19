let main = document.getElementById('main-heading');
let sub = document.getElementsByClassName('sub-heading');
let lorem = document.getElementsByClassName('lorem');
// console.log(sub);
// sub.innerHTML = 'Javascript is easy'
for (let i = 0; i < sub.length; i++){
  sub[i].innerHTML = 'Javascript is easy'
}

for (let i = 0; i < lorem.length; i++){
  lorem[i].innerHTML = 'No! Javascript is not easy'
}

let useTagName = document.getElementsByTagName('h2');
for (let i = 0; i < useTagName.length; i++){
  useTagName[i].innerHTML += ' Javascript go whine you, but no panic.'
}

// console.log(lorem[1]);

let newElement = document.createElement('img');
newElement.setAttribute('src', '1.jpeg');
lorem[1].appendChild(newElement);