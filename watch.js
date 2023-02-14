let ms = 0;
let s = 0;
let m = 0;
let counter;
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");

const time = document.querySelector(".time");

start.addEventListener("click", function () {
  if (!counter) {
    counter = setInterval(run, 10);
  }
  function run() {
    time.textContent = m + ":" + s + ":" + ms;
    ms++;
    if (ms === 100) {
      ms = 0;
      s++;
    }
    if (s === 60) {
      s = 0;
      m++;
    }
  }
});

stop.addEventListener("click", function () {
  clearInterval(counter);
  counter = false;
});
reset.addEventListener("click", function () {
  clearInterval(counter);
  counter = false;
  ms = 0;
  s = 0;
  m = 0;
  time.textContent = m + ":" + s + ":" + ms;
});
// Number 5 is the end and number 6 is the beginning of the stop watch project
