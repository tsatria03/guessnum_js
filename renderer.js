const minNumber = 1;
const maxNumber = 100;
const secretNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');

guessButton.addEventListener('click', () => {
  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < minNumber || guess > maxNumber) {
    message.textContent = 'Invalid input. Please enter a valid number between 1 and 100.';
  } else {
    attempts++;
    checkGuess(guess);
  }
});

function checkGuess(guess) {
  if (guess === secretNumber) {
    message.textContent = `Congratulations! You guessed the correct number ${secretNumber} in ${attempts} attempts.`;
    guessInput.disabled = true;
    guessButton.disabled = true;
  } else if (guess < secretNumber) {
    message.textContent = 'Too low. Try again.';
  } else {
    message.textContent = 'Too high. Try again.';
  }
}

window.addEventListener('DOMContentLoaded', () => {
  message.textContent = 'Welcome to the Guess the Number game!';
});
