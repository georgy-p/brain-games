/* eslint-disable no-alert, no-console */
/* eslint-disable import/prefer-default-export */
import { gamePlay, getRandomInt } from '../index.js';

const rules = 'What number is missing in the progression?';

const numHider = (arr) => {
  const result = [];
  const newArr = [];
  const index = getRandomInt(0, 9);
  const rightAnswer = arr[index];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === rightAnswer) {
      newArr.push('..');
    } else {
      newArr.push(arr[i]);
    }
  }
  result.push(rightAnswer, newArr);
  return result;
};

const getProgression = (startNum, stepNum) => {
  let num = startNum;
  const arr = [];
  arr.push(startNum);
  for (let i = 0; i < 9; i += 1) {
    num += stepNum;
    arr.push(num);
  }
  return arr;
};

// getProgression(5, 2);

const progressionGame = () => {
  const pair = [];
  const num = getRandomInt(1, 10);
  const step = getRandomInt(1, 10);
  const progression = getProgression(num, step);
  const hideProgression = numHider(progression);
  const question = hideProgression.pop().join(' ');
  const rightResult = hideProgression.pop().toString();
  pair.push(question, rightResult);
  return pair;
};

export const brainProgressionGame = () => {
  gamePlay(rules, progressionGame);
};
