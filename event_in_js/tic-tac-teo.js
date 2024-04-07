let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset-btn");
let newbtn = document.querySelector(".newbtn");
let mgscontainer = document.querySelector(".mgs-container");
let mgsWinner = document.querySelector("p");
let turn0 = true; //player 0 ,, // player X

let winning_pattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

let resetgame = () => {
  turn0=true;
  enabled();
  mgscontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
       // console.log("button was clicked");
       // box.innerText="SDM";
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled = true;
        checkWinner();
    });
});

let disabled = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

let enabled = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

const showWiner = (Winner) => {
mgsWinner.innerText=`Congratulation , Winner ${Winner}`;
mgscontainer.classList.remove("hide");
}

let checkWinner = () => {
    for(let pattern of winning_pattern)
    {
            let winningValue1 = boxes[pattern[0]].innerText;
            let winningValue2 = boxes[pattern[1]].innerText;
            let winningValue3 = boxes[pattern[2]].innerText;
        
            if(winningValue1 != "" && winningValue2 != "" && winningValue3 != ""){
                if(winningValue1 === winningValue2 && winningValue2 === winningValue3){
                   // console.log("Winner",winningValue1);
                    showWiner(winningValue1);
                    disabled();
                }
            }

    }
};

resetbtn.addEventListener("click",(resetgame));
newbtn.addEventListener("click",(resetgame));