#!/usr/bin/env node
/* eslint-disable no-alert, no-console */
/* eslint-disable import/prefer-default-export */
import * as pairs from '@hexlet/pairs';
import { gamePlay, getRandomInt } from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  const result = (num % 2 === 0) ? 'yes' : 'no';
  return result;
};

const gameNum = () => {
  const question = getRandomInt(1, 20);
  const rightResult = isEven(question);
  const pair = pairs.cons(question, rightResult);
  return pair;
};

const game = gameNum;

export const brainEvenGame = () => {
  gamePlay(rules, game);
};

brainEvenGame();
