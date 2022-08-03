'use strict';
/*
document.querySelector('.message');
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = '?';
document.querySelector('.heading').textContent = 'Fuck the Number!';
*/
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//const guess = Number(document.querySelector('.guess').value);
// ADDING EVENT LISTENER
document.querySelector('.check').addEventListener('click', function () {
  /*let displayScore = function (score) {
    document.querySelector('.score').textContent = score;
  };*/
  const guess = Number(document.querySelector('.guess').value);
  if (guess >= 1 && guess <= 20) {
    console.log(guess);
    // WHEN THERE IS NO INPUT
    if (!guess) {
      document.querySelector('.message').textContent = 'NO INPUT';
    }
    // WHEN PLAYER WINS
    else if (guess === number) {
      document.querySelector('.number').textContent = number;
      displayMessage('YOU WON');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      // CHANGING HIGH SCORE
      if (score > highscore) {
        highscore = score;
      }
      document.querySelector('.highscore').textContent = highscore;
    }
    // WHEN GUESS IS NOT THE NUMBER
    else if (guess !== number) {
      if (score > 1) {
        displayMessage(guess > number ? 'TOO HIGH' : 'TOO LOW');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('LOST!!');
        document.querySelector('.score').textContent = 0;
      }
    } /*
  else if (guess > number) {
    if (score > 1) {
      displayMessage('TOO HIGH');
      score--;
      document.querySelector('.score').textContent = score;
    } else 
  }
  // WHEN GUESS NUMBER IS TOO LOW
  else if (guess < number) {
    if (score > 1) {
      displayMessage('TOO LOW');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('LOST!!');
      document.querySelector('.score').textContent = 0;
    
  } else {
    displayMessage('LOST');
    document.querySelector('.score').textContent = 0;
  }*/
  } else {
    document.querySelector('.between').textContent = 'BEYOND LIMITS';
  }
});
//RESETTING THE GAME BY "AGAIN" BUTTON
/*
document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  displayMessage('START GUESSING..');
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
*/
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.between').textContent = '(BETWEEN 1 AND 20)';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnAbout = document.querySelector('.about');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
btnCloseModal.addEventListener('click', closeModal);
btnAbout.addEventListener('click', openModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
