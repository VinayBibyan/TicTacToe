let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector(".new-game");
let msg = document.querySelector(".msg");
let para = document.querySelector(".para");

let turnO = true;
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msg.classList.add("hide");
}
resetBtn.addEventListener("click",()=>{
    resetGame();
})
newGameBtn.addEventListener("click",()=>{
    resetGame();
})

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
})
const checkWinner=()=>{
    for(let el of winPattern){
        let pos1val=boxes[el[0]].innerText;
        let pos2val=boxes[el[1]].innerText;
        let pos3val=boxes[el[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("WINNER!", pos1val);
                showWinner(pos1val);
            }
        }
    }
}
const showWinner=(winner)=>{
    para.innerText=`congratulations, winner is ${winner}`;
    msg.classList.remove("hide");
    disableBoxes();
}
const disableBoxes=()=>{
    for(let el of boxes){
        el.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let el of boxes){
        el.disabled=false;
        el.innerText="";
    }
}