let quoteText = document.getElementsByTagName("h1")[0];
let author = document.getElementsByTagName("h2")[0];
let button = document.getElementsByTagName("button")[1];

async function randomQuote() {
  let url = "https://api.quotable.io/random";
  let response = await fetch(url);
  let quoteContent = await response.json();

  quoteText.innerHTML = quoteContent.content;
  author.innerHTML = '- ' + quoteContent.author;
}

button.addEventListener("click", randomQuote);
