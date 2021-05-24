/* eslint-disable no-alert, no-console */
/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const getName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${getName}!`);
};
