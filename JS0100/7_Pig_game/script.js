'use strict';

// Selecting elements
var player0El = document.querySelector('.player--0');
var player1El = document.querySelector('.player--1');
var score0El = document.querySelector('#score--0');
var score1El = document.getElementById('score--1');
var current0El = document.getElementById('current--0');
var current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
// let roll =  Math.trunc(Math.random() * 6) + 1;

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0,0]
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
}

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player0El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
  const dice =  Math.trunc(Math.random() * 6) + 1;
  console.log(dice)
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    // current0El.textContent = currentScore;
  } else {
    switchPlayer()
    // Switch to next player
    // document.getElementById(`current--${activePlayer}`).textContent = 0;
    // currentScore = 0;
    // activePlayer = activePlayer === 0 ? 1 : 0;
    // player0El.classList.toggle('player--active');
    // player0El.classList.toggle('player--active');
  }
}

});

btnHold.addEventListener('click', function () {
  if (playing) {

  // 1. Add current score to active player's score
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

  // Finish the Game
  if (scores[activePlayer] >= 100) {
    playing = false;
    diceEl.classList.add('hidden');
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player-active');
  } else {
  // 2. Check if player's score is >= 100
  switchPlayer();
  }
}
});

btnNew.addEventListener('click', init);

// btnNew.addEventListener('click', function() {
//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   current0El.textContent = 0;
//   current1El.textContent = 0;
//   player0El.classList.remove('player--winner');
//   player1El.classList.remove('player--winner');
//   player0El.classList.add('player--active');
//   player1El.classList.remove('player--active');
// })
