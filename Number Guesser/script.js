let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){
  min=0;
  max=9;
  target =  Math.round(Math.random() * (max-min)+min);
  return target;
}

function compareGuesses(humanGuess, computerGuess, secretTarget){
  if(Math.abs(computerGuess-secretTarget) < Math.abs(humanGuess-secretTarget))
    return false;
  return true;
}

function advanceRound()
{
  currentRoundNumber++;
}

function updateScore(winner)
{
  if(winner=="human"){
     humanScore++;
  }
  else{
     computerScore++;
  }
}