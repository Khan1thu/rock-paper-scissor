const buttons = document.querySelectorAll(".button");
const div = document.querySelector(".result");
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
        computerScore++;
        div.innerHTML = `   
                            <h3> Player is ${playerSelection} </h3>
                            <h3> Computer is ${computerSelection} </h3>
                            <h3> You Lose! Paper beat Rock </h3>
                            <h3> Computer score is now ${computerScore} </h3>`;

    }else if(playerSelection === 'rock' && computerSelection === 'scissor'){
        playerScore++;
        div.innerHTML = `
                            <h3> Player is ${playerSelection} </h3>
                            <h3> Computer is ${computerSelection} </h3>
                            <h3> You Win! Rock beat Scissor </h3>
                            <h3> Player score is now ${playerScore} </h3>`;

    }else if(playerSelection === 'rock' && computerSelection === 'rock'){
        div.innerHTML = `
                        <h3> Player is ${playerSelection} </h3>
                        <h3> Computer is ${computerSelection} </h3>
                        <h3> Tie </h3>
                        <h3> No one get score </h3>`;

    //Player Paper
    }else if(playerSelection === 'paper' && computerSelection === 'paper'){
        div.innerHTML = `
                            <h3> Player is ${playerSelection} </h3>
                            <h3> Computer is ${computerSelection} </h3>
                            <h3> Tie </h3> 
                            <h3> No one get score </h3>`;

    }else if(playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore++;
        div.innerHTML = `
                            <h3> Player is ${playerSelection} </h3>
                            <h3> Computer is ${computerSelection} </h3>
                            <h3> You Won! Paper beat Rock </h3> 
                            <h3> Player score is now ${playerScore} </h3>`;

    }else if(playerSelection === 'paper' && computerSelection === 'scissor'){
        computerScore++;
        div.innerHTML = `
                            <h3> Player is ${playerSelection} </h3>
                            <h3> Computer is ${computerSelection} </h3>
                            <h3> You Lose! Scissor beat Paper </h3> 
                            <h3> Computer score is now ${computerScore}`;

    //Player Scissor
    }else if(playerSelection === 'scissor' && computerSelection === 'scissor'){
        div.innerHTML = `
                            <h3> Player is ${playerSelection} </h3>
                            <h3> Computer is ${computerSelection} </h3>
                            <h3> Tie </h3> 
                            <h3> No one get score </h3>`;

    }else if(playerSelection === 'scissor' && computerSelection === 'rock'){
        computerScore++;
        div.innerHTML = `
                            <h3> Player is ${playerSelection} </h3>
                            <h3> Computer is ${computerSelection} </h3>
                            <h3> You Lose! Rock beat Scissor </h3> 
                            <h3> Computer score is now ${computerScore}`;

    }else if(playerSelection === 'scissor' && computerSelection === 'paper'){
        playerScore++;
        div.innerHTML = `
                            <h3> Player is ${playerSelection} </h3>
                            <h3> Computer is ${computerSelection} </h3>
                            <h3> You Win! Scissor beat Paper </h3> 
                            <h3> Player score is now ${playerScore}`;

    }
}

buttons.forEach(btn => {
    btn.addEventListener("click", (e)=>{
      const computer = computerPlay();
      
      if(playerScore > 4){
          div.innerHTML = `<h1> Player Won! reload to play it again</h1>`;
          return;
      }else if( computerScore > 4){
          div.innerHTML = `<h1> Computer Won! reload to play it again </h1>`;
          return;
      }else{
        playRound(e.target.value, computer);
      }
    });
})
