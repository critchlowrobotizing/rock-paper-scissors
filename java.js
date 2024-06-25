
const handOptions = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;


function didPlayerWin(humanSelection, computerInput){  
  let youWin = false;
  let computerWin = false;

  if(humanSelection == "rock" ) { 
    if(computerInput == "paper"){
      computerWin = true;
      
    } else if(computerInput == "scissors"){
      youWin = true;
    }
  }
  else if(humanSelection == "paper" ) { 
    if(computerInput == "scissors"){
      computerWin = true;
    } else if(computerInput == "rock"){
      youWin = true;
    }
  }
  else if(humanSelection == "scissors" ) { 
    if(computerInput == "rock"){
      computerWin = true;
    } else if(computerInput == "paper"){
      youWin = true;
    }
  }
  
  if (youWin == true){
    playerScore++;
    console.log(`Computer chose ${computerInput}, you chose ${humanSelection}, you Win!`);
  }
  if (computerWin == true){
    computerScore++;
    console.log(`Computer chose ${computerInput}, you chose ${humanSelection}, you Lose!`);
  }
  if (youWin == false && computerWin == false){
    console.log(`Computer chose ${computerInput}, you chose ${humanSelection}, you Tie!`);
  }
  console.log(`Player Score is : ${playerScore}, Computer Score is : ${computerScore}`)
}
  
function playRound(){
  let humanChoice = prompt('rock, paper or scissors? ... shoot on three');
    while(!handOptions.includes(humanChoice)){
      console.log("incorrect input");
      humanChoice = prompt('Incorrect input, choose again: rock, paper or scissors? ... shoot on three');
    }

  let computerChoice = 
    handOptions[(Math.floor(Math.random()* handOptions.length))];
  didPlayerWin(humanChoice, computerChoice);
}


for (let round = 1; round < 10; round++){
  console.log(`Round: ${round}`);
  playRound();
}

let humanChoice = prompt('rock, paper or scissors? ... shoot on three')