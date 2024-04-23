(async function(){
  let url = "https://api.coindesk.com/v1/bpi/currentprice.json";
  let response = await fetch(url);
  let bitcoinInfo = await response.json();

  // Get the Time
  let date = bitcoinInfo.time.updated;
  let hour = Number(date.slice(13, 15));
  hour = hour % 12 + "pm";
  document.getElementById("time").innerHTML += hour;

  // Get the Rate
  let rate = bitcoinInfo.bpi.USD.rate;
  document.getElementById('rate').innerHTML += rate;
})();