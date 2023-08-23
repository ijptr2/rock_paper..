const choices=['rock','paper','scissors']
function compChoice(){
    const randomValue = Math.floor(Math.random() * 3);
    const compChoice= choices[randomValue];
    return compChoice;
}

function decide(playGame,compChoice){
    if (playGame === compChoice) {
        //console.log('tie');
        return "tie";
    } else if (
        (playGame=== "rock" && compChoice === "scissors") ||
        (playGame === "scissors" && compChoice === "paper") ||
        (playGame === "paper" && compChoice=== "rock")
    ) {
        //console.log('user');
        return "user";
    } else {
        //console.log('computer2');
        return "computer";
    }
}


let sum1=0
let sum2=0
function vcomp(userChoice) {
    
    const computerChoice = compChoice();
    const result = decide(userChoice, computerChoice);
    const resultElement = document.getElementById("result");
    const display=document.getElementById('count');
    const displayUser=document.getElementById('playerScore');
    const displayComp=document.getElementById('compScore');

    if (result==='user'){
        resultElement.textContent = "Comp played " + computerChoice + " You win!";
        sum1=sum1+1
        displayUser.querySelector('p').textContent=sum1;
    }
    else if (result==='computer'){
        resultElement.textContent = "Comp played " + computerChoice + " Comp wins";
        sum2=sum2+1
        displayComp.querySelector('p').textContent=sum2;
    }
    else {
        resultElement.textContent = "Its a tie";
    }
    

    
}

