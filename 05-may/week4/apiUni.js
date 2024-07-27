async function uni(){
  let url = 'http://universities.hipolabs.com/search?country=Nigeria';
  let response = await fetch(url);
  let schoolInfo = await response.json();

  console.log(schoolInfo[0].web_pages[0]);
}

uni();