let ms = 0;
let s = 0;
let m = 0;

const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");

const time = document.querySelector(".time");

start.addEventListener("click", function () {
  function run() {
    time.textContent = m + ":" + s + ":" + ms;
    ms++;
  }
});
// Number 5 is the end and number 6 is the beginning of the stop watch project
