/* eslint-disable no-alert, no-console */
/* eslint-disable import/prefer-default-export */
import { gamePlay, getRandomInt } from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getDivisor = (arr) => {
  const [firstNum, secondNum] = arr;
  let num1;
  let num2;
  if (firstNum < secondNum) {
    num1 = secondNum;
    num2 = firstNum;
  } else {
    num1 = firstNum;
    num2 = secondNum;
  }
  if (num1 % num2 === 0) {
    return num2;
  }
  let modulo = num1 % num2;
  while (modulo !== 0) {
    num1 = num2;
    num2 = modulo;
    modulo = num1 % num2;
  }
  return num2;
};

const gcdGame = () => {
  const pair = [];
  const arr = [];
  const firstNum = getRandomInt(1, 100);
  const secondNum = getRandomInt(1, 100);
  arr.push(firstNum, secondNum);
  const question = arr.join(' ');
  const rightResult = getDivisor(arr).toString();
  pair.push(question, rightResult);
  return pair;
};

export const brainGcdGame = () => {
  gamePlay(rules, gcdGame);
};
