import Utility from './Utility';
import { FROZEN, GOING } from './constants';

export default class Timer {
  constructor() {
    this.totalTime = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.timerValue = {};
    this.timerLabel = {};

    this.previewTimeout = 0;
    this.gameoverTimeout = 0;
    this.previewStatus = FROZEN;
  }

  preview(previewTime) {
    [this.timerContainer] = Utility.selectElementsByClasses('timer-container');
    [this.timerValue] = Utility.selectElementsByClasses('timer-value');
    [this.timerLabel] = Utility.selectElementsByClasses('timer-label');
    this.previewStatus = GOING;
    return new Promise((resolve) => {
      this.previewTimeout = setTimeout(() => {
        this.previewStatus = FROZEN;
        resolve();
      }, previewTime * 1000);
    });
  }

  gameover(duration) {
    this.timerContainer.classList.remove('remove');

    this.totalTime = Number(duration) * 60;
    this.parseTime(this.totalTime);
    this.timerValue.innerText = `${this.minutes}:${this.seconds}`;

    return new Promise((resolve) => {
      this.gameoverTimeout = setInterval(() => {
        this.totalTime -= 1;
        this.parseTime(this.totalTime);
        this.timerValue.innerText = `${this.minutes}:${this.seconds}`;

        if (this.totalTime <= 0) {
          this.clear();
          resolve();
        }
      }, 1000);
    });
  }

  clear() {
    clearTimeout(this.gameoverTimeout);
    clearTimeout(this.previewTimeout);
    this.previewStatus = FROZEN;
    if (this.timerValue.innerText !== '') {
      this.timerValue.classList.add('gameOver');
    }
  }

  hide() {
    this.timerValue.innerText = '';
    this.timerValue.classList.remove('gameOver');
    this.timerContainer.classList.add('remove');
  }

  parseTime(totalTime) {
    this.minutes = Math.floor(totalTime / 60);
    this.seconds = totalTime % 60;
    this.minutes = Utility.addZero(this.minutes);
    this.seconds = Utility.addZero(this.seconds);
  }
}
