import { prompt } from "./prompt.js";

const playGuessingGame = () => {
  const chosenUserNumber = Number(prompt("Enter a number: "));
  playerTry += 1;
  const restartGame = () => {
    const restartGameByUser = prompt(
      "you want play again ? Y for yes, N for no."
    );
    if (restartGameByUser === "Y") {
      return playGuessingGame();
    } else if (restartGameByUser === "N") {
      return console.log("thank you bye!!!");
    }
  };

  if (isNaN(chosenUserNumber)) {
    console.log("Enter un number please !!!");
    return playGuessingGame();
  } else if (chosenUserNumber > targetNumber) {
    console.log("your number is too big, please retry!!!");
    return playGuessingGame();
  } else if (chosenUserNumber < targetNumber) {
    console.log("your number is too small, please retry!!!");
    return playGuessingGame();
  } else if (chosenUserNumber === targetNumber) {
    console.log(`you win with ${playerTry} try !!!!`);
    return restartGame();
  }
};
let playerTry = 0;
const min = 0;
const max = 100;
const targetNumber = Math.floor(Math.random() * (max - min) + min);
console.log(
  `Welcome to the Number Guessing Game! 🎮
    
  Rules:
  1. The system will generate a random number between 0 and 100.
  2. Your task is to guess this number.
  3. Enter a number when prompted.
  4. If your guess is too high or too low, you'll be notified, and you can guess again.
  5. The game continues until you guess the correct number.
  
  Let's get started! 🚀 `
);

playGuessingGame();
