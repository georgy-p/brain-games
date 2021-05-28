/* eslint-disable no-alert, no-console */
/* eslint-disable import/prefer-default-export */
import { gamePlay, getRandomInt } from '../index.js';

const rules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculator = (arr) => {
  let result;
  switch (arr[1]) {
    case '+':
      result = arr[0] + arr[2];
      break;
    case '-':
      result = arr[0] - arr[2];
      break;
    case '*':
      result = arr[0] * arr[2];
      break;
    default:
      result = null;
  }
  return result;
};

const calcGame = () => {
  const pair = [];
  const arr = [];
  const firstOperand = getRandomInt(1, 10);
  const secondOperand = getRandomInt(1, 10);
  const operator = operators[getRandomInt(0, 2)];
  arr.push(firstOperand, operator, secondOperand);
  const question = arr.join(' ');
  const rightResult = calculator(arr).toString();
  pair.push(question, rightResult);
  return pair;
};

export const brainCalcGame = () => {
  gamePlay(rules, calcGame);
};
