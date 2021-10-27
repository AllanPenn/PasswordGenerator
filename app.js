// PASSWORD GENERATOR

// Character Generator Functions

// Function that accepts a string value as an argument and returns a random index number from the string
function randomIndex(str){
  return Math.floor(Math.random() * str.length);
}

// Example of the randomIndex function
randomIndex(`example`); // 0, 1, 2, 3, 4, 5, 6

// Function that returns a random lowercase letter using a random index in the "letters" string
function getRandomLower(){
  const letters = `abcdefghijklmnopqrstuvwxyz`;
  // Returning a random letter using a random index in the "letters" string
  return letters[randomIndex(letters)];
}

// Example
console.log(getRandomLower());

// Function that returns a random uppercase letter
function getRandomUpper(){
  // Running the "getRandomLower" function to create a random letter and setting it to the letter variable
  const letter = getRandomLower();
  // Changing the random letter to an uppercase letter and returning it from the function
  return letter.toUpperCase
}

// Example
console.log(getRandomUpper());

// Function that returns a random number
function getRandomNumber(){
  const numbers = `0123456789`;
  // 
  return numbers[randomIndex(numbers)];
}

// Example
console.log(getRandomNumber());

// Function that returns a random symbol
function getRandomSymbol(){
  const symbols = `!@#$%^&*(){}[]=<>/,.`;
  // 
  return symbols[randomIndex(symbols)];
}

// Example
console.log(getRandomSymbol());

// Object to store all the character generator functions
const randomFunctions = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// Selecting the DOM Elements
const resultEl = document.querySelector(`#result`);
const clipboardEl = document.querySelector(`#clipboard`);
const lowercaseEl = document.querySelector(`#lowercase`);
const uppercaseEl = document.querySelector(`#uppercase`);
const numbersEl = document.querySelector(`#numbers`);
const symbolsEl = document.querySelector(`#symbols`);
const lengthEl = document.querySelector(`#length`);
const generateEl = document.querySelector(`#generate`);