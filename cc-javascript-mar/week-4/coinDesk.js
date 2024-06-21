// let time = document.getElementById("time");
// let liveRate = document.getElementById('rate');

async function bitPrice(){
  let url = "https://api.coindesk.com/v1/bpi/currentprice.json";
  let response = await fetch(url);
  let bitcoinInfo = await response.json();

  console.log(bitcoinInfo.time.updated, bitcoinInfo.bpi.USD.rate);
};

setInterval(bitPrice, 10000);
// function display(){
//   let result = bitPrice();
//   console.log(result);
// }

// setInterval(display, 1000);