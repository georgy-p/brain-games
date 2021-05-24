/* eslint-disable no-alert, no-console */
/* eslint-disable import/prefer-default-export */

import readlineSync from 'readline-sync';

const isEven = (num) => {
  const result = (num % 2 === 0) ? 'yes' : 'no';
  return result;
};

const getRandomInt = (min, max) => {
  const result = Math.random() * (max - min) + min;
  return Math.round(result);
};

export const brainEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(rules);

  const getQuestion = () => {
    for (let i = 0; i < 3; i += 1) {
      const randomNum = getRandomInt(1, 20);
      const rightResult = isEven(randomNum);
      const question = `Question: ${randomNum}`;
      console.log(question);
      const userAnswer = readlineSync.question('Your answer: ');
      if (userAnswer !== rightResult) {
        return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightResult}'. \n Let's try again, ${userName}`);
      }
      console.log('Correct!');
    }
    return console.log(`Congratulations, ${userName}!`);
  };
  getQuestion();
};
