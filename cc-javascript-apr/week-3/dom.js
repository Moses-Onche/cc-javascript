let paragraphs = document.getElementsByTagName('p');
let heading = document.getElementsByClassName('heading');
let firstParagraph = document.getElementById('first');
let link = document.getElementById('next-page');

// for (let count = 0; count <= paragraphs.length; count++){
//   paragraphs[count].innerHTML = "new content";
// }

// console.log(heading)
link.href = 'https://www.google.com';
firstParagraph.style.color = 'red';