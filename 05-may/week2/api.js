async function test(){
  let url = 'https://catfact.ninja/fact';
  let response = await fetch(url);
  let catInfo = await response.json();
  console.log(catInfo.fact);
  console.log(catInfo.length);
}

test()
