/* eslint-disable no-alert, no-console */
/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';

export const getRandomInt = (min, max) => {
  const result = Math.random() * (max - min) + min;
  return Math.round(result);
};

export const gamePlay = (gameRules, gameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);
  for (let i = 0; i < 3; i += 1) {
    const [gameQuestion, rightResult] = gameData();
    const question = `Question: ${gameQuestion}`;
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== rightResult) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightResult}'. \nLet's try again, ${userName}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${userName}!`);
};
