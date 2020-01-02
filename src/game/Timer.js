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

  preview(previewTime) {
    [this.timerContainer] = Utility.selectElementsByClasses('timer-container');
    [this.timerValue] = Utility.selectElementsByClasses('timer-value');
    [this.timerLabel] = Utility.selectElementsByClasses('timer-label');
    return new Promise((resolve) => {
      this.previewTimeout = setTimeout(() => {
        resolve();
      }, previewTime * 1000);
    });
  }

  gameover(duration) {
    this.timerContainer.classList.remove('remove');

    this.totallTime = Number(duration) * 60;
    this.parseTime(this.totallTime);
    this.timerValue.innerText = `${this.minutes}:${this.seconds}`;

    return new Promise((resolve) => {
      this.gameoverTimeout = setInterval(() => {
        this.totallTime -= 1;
        this.parseTime(this.totallTime);
        this.timerValue.innerText = `${this.minutes}:${this.seconds}`;

        if (this.totallTime <= 0) {
          this.clear();
          resolve();
        }
      }, 1000);
    });
  }

  clear() {
    clearTimeout(this.gameoverTimeout);
    clearTimeout(this.previewTimeout);
    if (this.timerValue.innerText !== '') {
      this.timerValue.classList.add('gameOver');
    }
  }

  hide() {
    this.timerValue.innerText = '';
    this.timerValue.classList.remove('gameOver');
    this.timerContainer.classList.add('remove');
  }

  parseTime(totallTime) {
    this.minutes = Math.floor(totallTime / 60);
    this.seconds = totallTime % 60;
    this.minutes = Utility.addZero(this.minutes);
    this.seconds = Utility.addZero(this.seconds);
  }
}
