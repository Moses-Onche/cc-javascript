function middleEarth(arr){
  let i = 0;
  while (i < arr.length){
    if (arr[i] === 'Frodo' || arr[i] === 'Sam'){
      if (arr[i + 1] === 'Frodo' || arr[i + 1] === 'Sam'){
        return true;
      } else {
        return false;
      }
    }
    i++;
  }
}

// console.log(middleEarth(["Audu", "Gandalf", "Sam"]));

function sortByLength(arr){
  let newArray = [];
  newArray = arr.sort(function(a, b){return a.length - b.length});
  return newArray;
}

// console.log(sortByLength(["Google", "Apple", "Microsoft"]));

function smallestAndLargest(a, b, c){
  let answer1 = 0;
  let answer2 = 0;

  if (a < b && a < c){
    answer1 = a;
  } else if (b < a && b < c){
    answer1 = b;
  } else {
    answer1 = c;
  }

  if (a > b && a > c){
    answer2 = a;
  } else if (b > a && b > c){
    answer2 = b;
  } else {
    answer2 = c;
  }

  return 'Smallest: ' + answer1 + ' ' + 'Largest: ' + answer2;
}

console.log(smallestAndLargest(95, 63, 8));