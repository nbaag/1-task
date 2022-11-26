const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    let time = seconds;
    
    let timerHours = Math.floor(time / 3600);
    let timerMinutes = Math.floor((time - (timerHours * 3600)) / 60);
    let timerSeconds = time - ((timerMinutes * 60) + (timerHours * 3600));

    timerEl.innerHTML = timerHours + ":" + timerMinutes + ":" + timerSeconds;

    let myInterval = setInterval(() => {

      if(timerMinutes === 0 && timerSeconds === 0) {
        timerHours--;
        timerMinutes = 59;
        timerSeconds = 60;
      }

      if(timerSeconds === 0) {
        timerMinutes--;
        timerSeconds = 60;
      }
      
      timerSeconds--;
      timerEl.innerHTML = timerHours + ":" + timerMinutes + ":" + timerSeconds;

      if(timerHours === 0 && timerMinutes === 0 && timerSeconds === 0) {
        clearInterval(myInterval)
      }
    }, 1000);
  };
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
