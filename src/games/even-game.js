/* eslint-disable no-alert, no-console */
/* eslint-disable import/prefer-default-export */
import { gamePlay, getRandomInt } from '../../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  const result = (num % 2 === 0) ? 'yes' : 'no';
  return result;
};

const evenNumGame = () => {
  const gameData = [];
  const question = getRandomInt(1, 20);
  const rightResult = isEven(question);
  gameData.push(question, rightResult);
  return gameData;
};

export const brainEvenGame = () => {
  gamePlay(rules, evenNumGame);
};
