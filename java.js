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
console.log(getComputerChoice())

// Step 3: Write the logic to get the human choice
// Your game will be played by a human player. You will write a function 
// that takes the user choice and returns it.

// 1. Create a new function named getHumanChoice.
// 2. Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
//          Hint: Use the prompt method to get the user’s input.
// 3. Test what your function returns by using console.log.

// Declare an array with the options of rock, paper, or scissors
const humanOptions = ["rock", "paper", "scissors"];
// Declare a variable that will store users answer
let humanChoice = prompt('rock, paper or scissors? ... shoot on three')
function getHumanChoice(){
    // if humanChoice is rock paper or scissors
    // proceed and run the rest of the code
    // else alert "that is not an acceptable move in rock paper scissors"
    
    // rest of code:
    // rock
    // if humanChoice is rock && computerChoice is scissors...print "you Win"
    // else if
    // humanchoice is rock && computerChoice is paper...print "you lose"
    // else if 
    // // humanchoice is rock && computerChoice is rock...rerun print "Tie... try again"
    // 
     // paper
    // if humanChoice is paper && computerChoice is scissors...print "you lose"
    // else if
    // humanchoice is paper && computerChoice is paper...print "Tie... try again"
    // else if 
    // // humanchoice is paper && computerChoice is rock...rerun print "you Win"
    // 
     // scissors
    // if humanChoice is scissors && computerChoice is scissors...print "Tie... try again"
    // else if
    // humanchoice is scissors && computerChoice is paper...print "you Win"
    // else if 
    // // humanchoice is scissors && computerChoice is rock...rerun print "you lose"
    // 
    return humanChoice
}
console.log(getHumanChoice())