import { Timer } from "./timer.js";
const startBtn = document.getElementById("start");
const restartBtn = document.getElementById("restart");
const pauseBtn = document.getElementById("pause");

const pomodorBtn = document.getElementById("promodor");
const shortBreakBtn = document.getElementById("short-break");
const longBreakBtn = document.getElementById("long-break");
let timer = null;
pauseBtn.disabled = true;
restartBtn.disabled = true;
const promodor = () => {
  timer = new Timer(25);
  timer.createMarkup();
};
const shortBreak = () => {
  timer = new Timer(5);
  timer.createMarkup();
};

const longBreak = () => {
  timer = new Timer(10);
  timer.createMarkup();
};
promodor();
//------check------

const check = () => {
  if (timer !== null) {
    timer.deleteInterval();
    timer = null;
  }
  return;
};

//----------actions--------------
startBtn.addEventListener("click", () => {
  timer.start();
  startBtn.disabled = true;
  restartBtn.disabled = false;
  pauseBtn.disabled = false;
});
pauseBtn.addEventListener("click", () => {
  startBtn.disabled = false;
  restartBtn.disabled = false;
  pauseBtn.disabled = true;
  timer.pause();
});

restartBtn.addEventListener("click", () => {
  startBtn.disabled = false;
  restartBtn.disabled = true;
  pauseBtn.disabled = true;
  timer.restart();
});

// ----------------tabs---------------

pomodorBtn.addEventListener("click", () => {
  check();
  promodor();
});
shortBreakBtn.addEventListener("click", () => {
  check();
  shortBreak();
});

longBreakBtn.addEventListener("click", () => {
  check();
  longBreak();
});
