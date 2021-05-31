/* eslint-disable no-alert, no-console */
/* eslint-disable import/prefer-default-export */
import { gamePlay, getRandomInt } from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59,
  61, 67, 71, 73, 79, 83, 89, 97];

const isPrime = (num) => {
  const result = primeNumbers.includes(num) ? 'yes' : 'no';
  return result;
};

const primeGame = () => {
  const pair = [];
  const num = getRandomInt(1, 99);
  const question = num;
  const rightResult = isPrime(num);
  pair.push(question, rightResult);
  return pair;
};

export const brainPrimeGame = () => {
  gamePlay(rules, primeGame);
};
