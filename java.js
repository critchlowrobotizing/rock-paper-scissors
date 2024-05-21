// Step 2: Write the logic to get the computer choice
// write a function that randomly returns "rock", "paper"
// or "scissors"

// 1. Create a new function named getComputerChoice.
// 2. Write the code so that getComputerChoice will randomly 
// return one of the following string values: “rock”, “paper” 
// or “scissors”.
// Hint: The Math.random method returns a random number 
// that’s greater than or equal to 0 and less than 1. 
// Think about how you can use this to conditionally return
//  one of the multiple choices.
// 3. Test that your function returns what you expect using 
// console.log or the browser developer tools before advancing
//  to the next step.

// Declare an array with the options of rock, paper or scissors
const computerOptions = ["rock", "paper", "scissors"];
// Declare a variable that randomly picks from the array
let computerChoice = 
computerOptions[(Math.floor(Math.random()* computerOptions.length))]
;
// function returns the variable computerChoice
function getComputerChoice(){
return computerChoice;
};

