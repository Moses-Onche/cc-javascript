(async function test(){
  const url = 'https://www.cbn.gov.ng/rates/ExchRateByCurrency.asp'
  const response = await fetch(url);
  const display = await response.json();
  console.log(String(display));
})()