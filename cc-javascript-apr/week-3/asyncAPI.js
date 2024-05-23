async function apiTest(){
  let url = 'https://catfact.ninja/fact';
  let response = await fetch(url);
  let catInfo = await response.json()
  console.log(catInfo.fact);
}

apiTest();