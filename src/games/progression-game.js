/* eslint-disable no-alert, no-console */
/* eslint-disable import/prefer-default-export */
import { gamePlay, getRandomInt } from '../../index.js';

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
  const progression = [];
  progression.push(startNum);
  for (let i = 0; i < 9; i += 1) {
    num += stepNum;
    progression.push(num);
  }
  return progression;
};

const progressionGame = () => {
  const gameData = [];
  const num = getRandomInt(1, 10);
  const step = getRandomInt(1, 10);
  const progression = getProgression(num, step);
  const hideProgression = numHider(progression);
  const question = hideProgression.pop().join(' ');
  const rightResult = hideProgression.pop().toString();
  gameData.push(question, rightResult);
  return gameData;
};

export const brainProgressionGame = () => {
  gamePlay(rules, progressionGame);
};
