async function apiExample(){
  let url = "https://catfact.ninja/fact";
  let response = await fetch(url);
  let catQuote = await response.json();

  // Pick out quote and display it.
  let quote = document.getElementById('cat-quote');
  let length = document.getElementById("length");
  quote.innerHTML = catQuote.fact;
  length.innerHTML = catQuote.length;
}

apiExample();