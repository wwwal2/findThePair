import Utility from './Utility';

export default class Timer {
  constructor(showAll, hideAll, allCells) {
    this.showAll = showAll;
    this.hideAll = hideAll;
    this.allCells = allCells;

    this.totallTime = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.timerValue = {};
    this.timerLabel = {};

    this.previewTimeout = 0;
    this.gameoverTimeout = 0;
  }

  start(duration) {
    [this.timerValue] = Utility.selectElementsByClasses('timer-value');
    [this.timerLabel] = Utility.selectElementsByClasses('timer-label');
    this.timerLabel.classList.remove('hidden');

    this.totallTime = Number(duration) * 60;
    this.parseTime(this.totallTime);
    this.timerValue.innerText = `${this.minutes}:${this.seconds}`;

    this.gameoverTimeout = setInterval(() => {
      this.totallTime = this.totallTime - 1;
      this.parseTime(this.totallTime);
      this.timerValue.innerText = `${this.minutes}:${this.seconds}`;

      if (this.totallTime === 0) {
        this.clear();
        this.timerValue.innerText = `${this.minutes}:${this.seconds}`; Utility.switchProperty('disabled', true, ...this.allCells);
        this.timerValue.classList.add('gameOver');
      }
    }, 1000);
  }

  begin(previewTime, gameoverTime) {
    this.showAll();
    this.previewTimeout = setTimeout(() => {
      this.hideAll();
      this.start(gameoverTime);
    }, previewTime * 1000);
  }

  clear() {
    clearTimeout(this.gameoverTimeout);
    clearTimeout(this.previewTimeout);

    this.timerLabel.classList.add('hidden');
    this.timerValue.classList.remove('gameOver');
    this.timerValue.innerText = '';

    Utility.switchProperty('disabled', true, ...this.allCells);
  }

  parseTime(totallTime) {
    this.minutes = Math.floor(totallTime / 60);
    this.seconds = totallTime % 60;
    this.minutes = this.minutes < 10 ? `0${this.minutes}` : this.minutes;
    this.seconds = this.seconds < 10 ? `0${this.seconds}` : this.seconds;
  }
}
