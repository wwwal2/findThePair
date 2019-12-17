import Utility from './Utility';

export default class Timer {
  constructor() {
    this.timerId = 0;
    this.totallTime = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.timerValue = {};
    this.timerLabel = {};
  }

  start(duration) {
    [this.timerValue] = Utility.selectElements('timer-value');
    [this.timerLabel] = Utility.selectElements('timer-label');
    this.timerLabel.classList.remove('hidden');

    this.totallTime = Number(duration) * 60;
    this.parseTime(this.totallTime);
    this.timerValue.innerText = `${this.minutes}:${this.seconds}`;

    this.timerId = setInterval(() => {
      this.totallTime = this.totallTime - 1;
      this.parseTime(this.totallTime);
      this.timerValue.innerText = `${this.minutes}:${this.seconds}`;

      if (this.totallTime === 0) {
        this.clear();
        const cells = Utility.selectElements('cells');
        Utility.switchProperty('disabled', true, ...cells);
        this.timerValue.classList.add('gameOver');
      }
    }, 1000);
  }

  clear(previewTmerId, compareTimeoutId) {
    clearTimeout(this.timerId);
    clearTimeout(previewTmerId);
    clearTimeout(compareTimeoutId);
  }

  parseTime(totallTime) {
    this.minutes = Math.floor(totallTime / 60);
    this.seconds = totallTime % 60;
    this.minutes = this.minutes < 10 ? `0${this.minutes}` : this.minutes;
    this.seconds = this.seconds < 10 ? `0${this.seconds}` : this.seconds;
  }
}
