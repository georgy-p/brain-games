<a href="https://codeclimate.com/github/codeclimate/codeclimate/maintainability"><img src="https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability" /></a>

# About

Brain Games is a set of five console-games. Each game asks questions expecting right answers back. Three right answers mean that game is passed. Wrong answers finish game and suggest trying it again.

## Games:
- Calculator. Do some simple calculations.
- Progression. Find skipped element in sequence of numbers.
- Conclude whether given number is even or not.
- Find the greatest common divisor of given numbers.
- Conclude whether given number is prime or not.

## Example:
```
May I have your name: Michael
Hello, Michael!
What number is missing in the progression?
Question: 38 43 48 .. 58 63
Your answer: 53
Correct!
Question: 44 47 50 .. 56 59
Your answer: 53
Correct!
Question: .. 27 31 35 39 43 47 51
Your answer: 23
Correct!
Congratulations, Michael!
```

# How to install
1. Clone the repository.
2. In the root directory: `$ make install`.

# How to play
- Calculator: `$ brain-calc`
- Progression: `$ brain-progression`
- Parity of the number: `$ brain-even`
- The greatest common divisor: `$ brain-gcd`
- Prime numbers: `$ brain-prime`
