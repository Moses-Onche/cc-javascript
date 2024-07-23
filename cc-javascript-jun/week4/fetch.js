async function displayInfo(){
  // Save the API in a string variable
  let url = 'https://catfact.ninja/fact';

  // Use fetch() to get a response from the server
  let response = await fetch(url);
  
  // Collect JSON response
  let randomCatFact = await response.json();
  // console.log(randomCatFact);
  console.log(randomCatFact.fact);
};

displayInfo();