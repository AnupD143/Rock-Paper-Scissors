let userScore = 0; 
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#userScore");
const compScorepara = document.querySelector("#compScore");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again"
    msg.style.backgroundColor = "black"
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You Win your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
    }
    else{
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You lose ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userchoice) => {
    console.log("user choice = ", userchoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ",compChoice);
    // return options[randIdx];

    if(userchoice == compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userchoice === "rock"){
            compChoice === "paper" ? false : true;
        }
        else if (userchoice === "paper"){
            userWin = compChoice === "scissors" ? false : true
        }
        else{
            
           userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoice, compChoice);
    }
};

choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        //  console.log("choice was clicked", userchoice);
        playGame(userchoice)
    })

})