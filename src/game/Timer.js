import Utility from './Utility';

export default class Timer {
  constructor() {
    this.totallTime = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.timerValue = {};
    this.timerLabel = {};

    this.previewTimeout = 0;
    this.gameoverTimeout = 0;
  }

  preview(duration) {
    [this.timerValue] = Utility.selectElementsByClasses('timer-value');
    [this.timerLabel] = Utility.selectElementsByClasses('timer-label');
    return new Promise((resolve) => {
      this.previewTimeout = setTimeout(() => {
        resolve();
      }, duration * 1000);
    });
  }

  start(duration) {
    this.timerLabel.classList.remove('hidden');

    this.totallTime = Number(duration) * 60;
    this.parseTime(this.totallTime);
    this.timerValue.innerText = `${this.minutes}:${this.seconds}`;

    return new Promise((resolve) => {
      this.gameoverTimeout = setInterval(() => {
        this.totallTime = this.totallTime - 1;
        this.parseTime(this.totallTime);
        this.timerValue.innerText = `${this.minutes}:${this.seconds}`;

        if (this.totallTime === 0) {
          this.clear();
          this.timerValue.innerText = `${this.minutes}:${this.seconds}`;
          this.timerValue.classList.add('gameOver');
          resolve();
        }
      }, 1000);
    });
  }

  clear() {
    clearTimeout(this.gameoverTimeout);
    clearTimeout(this.previewTimeout);
    if (this.timerValue.innerText !== '') {
      this.timerLabel.classList.add('hidden');
      this.timerValue.classList.remove('gameOver');
      this.timerValue.innerText = '';
    }
    // else {
    //   hideAll();
    // }
    // disableAll();
  }

  parseTime(totallTime) {
    this.minutes = Math.floor(totallTime / 60);
    this.seconds = totallTime % 60;
    this.minutes = this.minutes < 10 ? `0${this.minutes}` : this.minutes;
    this.seconds = this.seconds < 10 ? `0${this.seconds}` : this.seconds;
  }
}
