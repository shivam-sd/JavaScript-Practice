let userScore = 0;
let compScore = 0;

let userScorepara = document.querySelector(".user-score");
let compScorepara = document.querySelector(".comp-score");

let gencompchoice = () => {
    let option = ["rock","paper","scissors"];
    let randomidx = Math.floor(Math.random()*3);
    return option[randomidx];
}

let GameDraw = () => {
    console.log("Game Was Draw");
    mgs.innerText="Game Was Draw ! Play Again";
    mgs.style.backgroundColor="black";
}

let mgs = document.querySelector(".mgs");

let showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        // console.log("You Win");
        mgs.style.backgroundColor="green";
        mgs.innerText="Yow Win";
    }
    else{
        compScore++;
        compScorepara.innerText=compScore;
        // console.log("You Lose");
        mgs.style.backgroundColor="red";
        mgs.innerText="Yow Lose";
    }
}

let palygame = (userChoice) => {
// console.log("user choise ",userChoice);
let compidx = gencompchoice();
// console.log("comp Choice ",compidx);
if(userChoice === compidx){
    GameDraw();
}
else{
    let userWin = true;
    if(userChoice === "rock"){
        // scissors , paper
        userWin = compidx === "paper" ? false : true;
    }
    else if (userChoice === "paper"){
        //rock, scissors
        userWin = compidx === "scissors" ? false : true;
    }
    else{
        userWin = compidx === "rock" ? false : true;
    }
    showWinner(userWin);
}
}


let choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
let userChoice = choice.getAttribute("id");
        palygame(userChoice);
    });
});