const games = ['rock', 'paper' , 'scissor'];
let playerScore = 0;
let computerScore = 0;

//computerPlay function
//function that will return computer play
function computerPlay() {
    const game =  games[Math.floor(Math.random()*games.length)];
    return game;
}

//Playround function
function playRound(playerSelection, computerSelection){

    //player rock
    if(playerSelection === 'rock' && computerSelection === 'paper'){
        console.log("You Lose! Paper beat Rock");
        computerScore++;
        console.log("Computer score is now " + computerScore);
    }else if(playerSelection === 'rock' && computerSelection === 'scissor'){
        console.log("You Win! Rock beat Scissor");
        playerScore++;
        console.log("Player score is now " + playerScore);
    }else if(playerSelection === 'rock' && computerSelection === 'rock'){
        console.log("Tie");
        console.log("No one get score");

    //Player Paper
    }else if(playerSelection === 'paper' && computerSelection === 'paper'){
        console.log("Tie");
        console.log("No one get score");
    }else if(playerSelection === 'paper' && computerSelection === 'rock'){
        console.log("You Won! Paper beat Rock");
        playerScore++;
        console.log("Player score is now " + playerScore);
    }else if(playerSelection === 'paper' && computerSelection === 'scissor'){
        console.log("You Lose! Scissor beat Paper");
        computerScore++;
        console.log("Computer score is now " + computerScore);

    //Player Scissor
    }else if(playerSelection === 'scissor' && computerSelection === 'scissor'){
        console.log("Tie");
        console.log("No one get score");
    }else if(playerSelection === 'scissor' && computerSelection === 'rock'){
        console.log("You Lose! Rock beat Scissor");
        computerScore++;
        console.log("Computer score is now " + computerScore);
    }else if(playerSelection === 'scissor' && computerSelection === 'paper'){
        console.log("You Win! Scissor beat Paper");
        playerScore++;
        console.log("Player score is now " + playerScore);
    }else{
        console.log("Please type correctly");
    }
}

//game function
function game(){
   for(i = 0; i < 5 ; i++){
    const playerSelection = prompt("Please Enter Rock or Paper or Scissor").toLowerCase();
    console.log("Player is: " + playerSelection);
    const computerSelection = computerPlay();
    console.log("Computer is: " + computerSelection);
    playRound(playerSelection, computerSelection);
   }

   if(playerScore == computerScore){
       console.log("Tie");
   }else if(playerScore > computerScore){
       console.log("Player won! Player score is " + playerScore);
   }else if(playerScore < computerScore){
       console.log("Computer won! Computer score is " + computerScore);
   }
}

game();