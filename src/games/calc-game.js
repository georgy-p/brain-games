/* eslint-disable no-alert, no-console */
/* eslint-disable import/prefer-default-export */
import { gamePlay, getRandomInt } from '../../index.js';

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
  const gameData = [];
  const mathExpression = [];
  const firstOperand = getRandomInt(1, 10);
  const secondOperand = getRandomInt(1, 10);
  const operator = operators[getRandomInt(0, 2)];
  mathExpression.push(firstOperand, operator, secondOperand);
  const question = mathExpression.join(' ');
  const rightResult = calculator(mathExpression).toString();
  gameData.push(question, rightResult);
  return gameData;
};

export const brainCalcGame = () => {
  gamePlay(rules, calcGame);
};
