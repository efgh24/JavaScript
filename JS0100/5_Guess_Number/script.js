'use script';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = "👍 Correct Number!"

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 24
console.log(document.querySelector('.guess').value);
*/

let secretNumber =  Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof(guess));
  if (!guess) {
    displayMessage("⛔️ No Number!");
    // document.querySelector('.message').textContent = "⛔️ No Number!"

  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage("✅ Correct Number!");

    // document.querySelector('.message').textContent = "✅ Correct Number!";
    document.querySelector('.highscore').textContent = guess;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem'
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Number too high!" : "📉 Number too low!");

      // document.querySelector('.message').textContent = guess > secretNumber ? "📈 Number too high!" : "📉 Number too low!";
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage("💥 Game Over!");

      // document.querySelector('.message').textContent = "💥 Game Over!";
      document.querySelector('.score').textContent = 0;
    }
  }
})
//   else if (guess > secretNumber) {
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = "📉 Number too low!"
//       score -= 1;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = "💥 Game Over!";
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// })

///////////////////////////////////////
// Coding Challenge #1

/*
Implement a game rest functionality, so that the player can make a new guess! Here is how:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK 😀
*/

document.querySelector('.again').addEventListener('click', function () {
  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");

  // document.querySelector('.message').textContent = "Start guessing...";
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
})

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof(guess));
