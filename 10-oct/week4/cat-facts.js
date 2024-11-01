async function catFact(){
  let url = "https://catfact.ninja/fact";
  let response = await fetch(url);
  let catInfo = await response.json();
  // console.log(catInfo.fact);
  
  let catQuote = document.querySelector("h1");
  catQuote.innerHTML = catInfo.fact;
};

catFact();