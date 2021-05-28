/* eslint-disable no-alert, no-console */
/* eslint-disable import/prefer-default-export */
import { gamePlay, getRandomInt } from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  const result = (num % 2 === 0) ? 'yes' : 'no';
  return result;
};

const gameNum = () => {
  const pair = [];
  const question = getRandomInt(1, 20);
  const rightResult = isEven(question);
  pair.push(question, rightResult);
  return pair;
};

export const brainEvenGame = () => {
  gamePlay(rules, gameNum);
};
