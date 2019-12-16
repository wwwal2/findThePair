import Utility from './Utility';

export default class Timer {
  constructor() {
    this.timerId = 0;
    this.totallTime = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.timerValue = {};
  }

  start(duration) {
    [this.timerValue] = Utility.selectElements('timer-value');
    this.totallTime = Number(duration) * 60;

    this.timerId = setInterval(() => {
      this.totallTime = this.totallTime - 1;
      this.minutes = Math.floor(this.totallTime / 60);
      this.seconds = this.totallTime % 60;
      this.timerValue.innerText = `${this.minutes} : ${this.seconds}`;

      if (this.totallTime === 0) {
        this.clear();
        const cells = Utility.selectElements('cells');
        Utility.switchProperty('disabled', true, ...cells);
        this.timerValue.classList.add('gameOver');
      }
    }, 1000);
  }

  clear(previewTmerId) {
    clearTimeout(this.timerId);
    clearTimeout(previewTmerId);
  }
}
