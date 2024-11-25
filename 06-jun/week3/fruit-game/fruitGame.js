let apple = document.getElementById('fruit');
let displayLives = document.getElementById('lives');
let displayScore = document.getElementById('score');
let playArea = document.getElementById('area');
let scoreCount = 0;
let lives = 3;
let speed = 1400;

// Start the game
alert('FruitGame!\n Click on the fruit as many times as possible.' +
  '\nIf you miss 3 times, the game ends.\n' + 'Click OK to start!');

// Move the fruit to random positions
function move(){
  let num1 = Math.trunc(Math.random() * 80);
  let num2 = Math.trunc(Math.random() * 80);
  let parameter1 = 17;
  let parameter2 = 70;

  if (num1 < parameter1){
    num1 = parameter1;
  } else if (num1 > parameter2){
    num1 = parameter2;
  }
  
  if (num2 < parameter1){
    num2 = parameter1;
  } else if (num2 > parameter2){
    num2 = parameter2;
  }

  console.log(num1 + ", " + num2);
  apple.style.top = num1 + '%';
  apple.style.left = num2 + '%';
}

// Increase score count when the fruit is clicked
apple.addEventListener('click', function(){
  scoreCount += 5;
  if (scoreCount % 20 === 0){
    speed -= 200;
  }
  displayScore.innerHTML = 'Score: ' + scoreCount;
})

// Lose a life when fruit is not clicked
playArea.addEventListener('click', function(){
  lives--;
  displayLives.innerHTML += 'X ';

  // Check if the player runs out of lives and
  // Reset the scores and values
  setTimeout(check, 1000);
  function check(){
    if (lives === 0){
      alert('Game Over!\nScore: ' + scoreCount);
      scoreCount = 0;
      lives = 3;
      displayLives.innerHTML = "";
      displayScore.innerHTML = 'Score: ' + scoreCount;
    }
  }
});

// GameOver

// Update display according to program activity
setInterval(move, speed);