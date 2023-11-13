'use strict';

const againBtn = document.querySelector('.again');
const guessNumber = document.querySelector('.number');
const message = document.querySelector('.message');
const currentScore = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const checkBtn = document.querySelector('.check');
const numberInput = document.querySelector('.guess');

let randomNumber = Math.floor(Math.random() * 20) + 1;

checkBtn.onclick = function () {
  if (Number(numberInput.value) === randomNumber) {
    message.textContent = `You Guessed it right! it is ${randomNumber}`;
    numberInput.value = '';
    document.body.style.backgroundColor = 'green';
    guessNumber.textContent = randomNumber;
    checkBtn.disabled = true;
    checkBtn.style.cursor = 'not-allowed';
    if (Number(currentScore.innerHTML) >= Number(highScore.innerHTML)) {
      highScore.innerHTML = Number(currentScore.innerHTML);
    }
  } else if (numberInput.value == '' || numberInput == null) {
    message.textContent = 'Please Enter a number it cant be empty';
  } else if (Number(numberInput.value) > 20) {
    message.textContent = 'Waaaay too high! from 1 to 20 i said!';
  } else if (Number(numberInput.value) > randomNumber) {
    message.textContent = 'too high!';
    let wrongAnswer = Number(currentScore.innerHTML) - 1;
    currentScore.innerHTML = wrongAnswer;
  } else if (Number(numberInput.value) < randomNumber) {
    message.textContent = 'too low!';
    let wrongAnswer = Number(currentScore.innerHTML) - 1;
    currentScore.innerHTML = wrongAnswer;
  }
};
againBtn.onclick = function () {
  document.body.style.backgroundColor = '#222';
  numberInput.value = '';
  message.textContent = `Start guessing... Again`;
  checkBtn.disabled = false;
  checkBtn.style.cursor = 'pointer';
  randomNumber = Math.floor(Math.random() * 20) + 1;
  currentScore.innerHTML = 20;
  guessNumber.innerText = '?';
};
