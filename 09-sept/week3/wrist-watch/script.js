let productItem = document.getElementsByClassName('item');
let popUp = document.getElementById('window');
// console.log(productItem);
console.log(popUp.children[0].children[0]);

for (let i = 0; i < productItem.length; i++){
  productItem[i].addEventListener('click', function(){
    // console.log(Math.trunc(Math.random() * 5));
    let image = this.children[0].getAttribute('src');
    let productName = this.children[1].innerHTML;
    let price = this.children[2].innerHTML;
    let units = Math.trunc(Math.random() * 5);

    popUp.children[0].children[0].setAttribute('src', image);
    popUp.children[1].children[1].innerHTML = productName;
    popUp.children[1].children[2].innerHTML = price;
    popUp.children[1].children[4].innerHTML = '+' + units + ' available';
    popUp.style.display = 'flex';
  });
}

popUp.children[1].children[0].addEventListener('click', function(){
  popUp.style.display = 'none';
})