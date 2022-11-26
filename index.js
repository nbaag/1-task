const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

let time= 0;

function setTime() {
  time = inputEl.value;
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time - (hours * 3600)) / 60);
  let seconds = time - ((minutes * 60) + (hours * 3600));
  // hours = hours < 10 ? "0" + hours : hours;
  // minutes = minutes < 10 ? "0" + minutes : minutes;
  // seconds = seconds < 10 ? "0" + seconds : seconds;

  timerEl.innerHTML = hours + ":" + minutes + ":" + seconds;

  let myInterval = setInterval(() => {
    if(minutes === 0 && seconds === 0) {
      hours--;
      minutes = 59;
      seconds = 60;
    }

    if(seconds === 0) {
      minutes--;
      seconds = 60;
    }
    
    seconds--;
    timerEl.innerHTML = hours + ":" + minutes + ":" + seconds;

    if(hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(myInterval)
    }
  }, 1000);
}


// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {};
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
