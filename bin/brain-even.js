/* eslint-disable no-alert, no-console */
/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';

const getUserName = [];

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const getName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${getName}!`);
  getUserName.push(getName);
};

const userName = getUserName.join();

greeting();

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
console.log(rules);

const isEven = (num) => {
  const result = (num % 2 === 0) ? 'yes' : 'no';
  return result;
};

const getRandomInt = (min, max) => {
  const result = Math.random() * (max - min) + min;
  return Math.round(result);
};

const getQuestion = () => {
  const randomNum = getRandomInt(1, 20);
  const rightResult = isEven(randomNum);
  const question = `Question: ${randomNum}`;
  console.log(question);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer !== rightResult) {
    return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. \n Let's try again, ${userName}`);
  }
  console.log('Correct!');
  return question;
};

getQuestion();
