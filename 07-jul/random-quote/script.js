let quote = document.getElementById('quote');
let author = document.getElementById('author');
let button = document.getElementsByTagName('button')[0];
// console.log(button);

async function randomQuote(){
  let url = 'https://api.quotable.io/random';
  let response = await fetch(url);
  let resQuote = await response.json();

  // console.log(resQuote);
  quote.innerHTML = resQuote.content;
  author.innerHTML = resQuote.author;
}

button.addEventListener('click', randomQuote);