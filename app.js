let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-game");
let newbtn = document.querySelector("#new-game");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn1 = true;
let win = false;
let moves = 0;

const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const showwinner = (winner) => {
  msg.innerText = `Congratulations , winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableboxes();
};
const showdraw = () => {
  msg.innerText = `Match Tie`;
  msgcontainer.classList.remove("hide");
  disableboxes();
};

const resetGame = () => {
  turn1 = true;
  enableboxes();
  msgcontainer.classList.add("hide");
  moves = 0;
};

const disableboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const checkwinner = () => {
  for (let pattern of winpattern) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos2 == pos3) {
        win = true;
        moves = 0;
        console.log("win = " + win);
        if (win == true) {
          console.log("WIN");
          showwinner(pos1);
          resetbtn.classList.add("hide");
          win = false;
        }
      }
    }
  }

  if (win == false && moves == 9) {
    console.log("TIE");
    showdraw();
<<<<<<< HEAD
=======
    resetbtn.classList.add("hide");
    c=0;
>>>>>>> 84a936e92a16f6f2ec538070cb897e0f8760833f
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    resetbtn.classList.remove("hide");
    if (turn1) {
      box.innerText = "X";
      turn1 = false;
      moves++;
      console.log(moves);
    } else {
      box.innerText = "O";
      turn1 = true;
      moves++;
      console.log(moves);
    }
    box.disabled = true;
    checkwinner();
  });
});

newbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
