async function displayContent(){
  let url = 'https://catfact.ninja/fact';
  let response = await fetch(url);
  let finalResponse = await response.json();

  console.log(finalResponse.fact);
}

displayContent();