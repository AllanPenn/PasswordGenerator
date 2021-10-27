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

// Function that accepts true or false values as well as a number as arguments
// NOTE: The checkbox inputs and number input will determine the value/arguments entered into this function
function generatePassword(lower, upper, number, symbol, length){

  console.log(lower, upper, number, symbol, length);

  // 1. CREATE THE PASSWORD VARIABLE
  let generatedPassword = ``;

  // 2. FILTER OUT UNCHECKED OPTIONS
  // True and false values can be added together (True = 1 and false = 0)
  // NOTE: The value set to typesCount will be used when building the password
  const typesCount = lower + upper + number + symbol;
  console.log(typesCount);

  // If user has not selected any of the four options, then dsiplay alert and return an empty string from the function so the password displayed will just be an empty string
  if (typesCount === 0){
    alert(`Please select at least one option`);
    // Return keyword stops/ends the execution of a function
    return ``;
  }

  // Creating an array of arrays. The first item in each nested array hold the value of a string that will be used to access a function in the randomFunctions object. Also, the second item in each nested array is one of the values passed into this generatePassword function.
  let typesArr = [
    [`lower`, lower],
    [`upper`, upper],
    [`number`, number],
    [`symbol`, symbol]
  ];
  console.log(typesArr);

  // The filter method creates a new array with all the items that pass the test implemented by the provided function
  // Checking if the value for index of 1 in each item in the array is true or false. Also, removing the item from the array if it is false
  typesArr = typesArr.filter(item => {
    console.log(item[1]);
    return item[1];
  });
  console.log(`typesArr:`, typesArr);

  // 3. LOOP OVER THE LENGTH AND CALL THE GENERATOR FOR EACH CHECKED OPTION
  // Building password with a for loop
  // NOTE: The value for "length" is the value selected for the length number input
  for (i = 0; i < length; i += typesCount){
    // One of the items in the updated/filtered version of the typesArr will be the value/argument passed in for the type parameter each time the anonymous arrow function is run/executed
    typesArr.forEach(type => {
      const funcName = type[0];
      console.log(funcName);
      // Accessing and running/executing a function in the randomFunctions object. Also, adding the value returned from the accessed function to the generatedPassword string variable
      generatedPassword += randomFunctions[funcName]();
      console.log(generatedPassword);
    });
  }

  // 4. ADD THE GENERATED PASSWORD TO THE FINAL VARIABLE AND RETURN IT FROM THE FUNCTION
  // Removing extra characters if necessary (The above loop will create a password that may not match the length selected if that length is not a multiple of the number of options/checkboxes selected)
  const finalPassword = generatedPassword.slice(0, length);
  console.log(finalPassword);

  return finalPassword;
}