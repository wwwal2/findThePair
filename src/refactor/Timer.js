import Utility from './Utility';

export default class Timer {
  constructor() {
    this.totallTime = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.timerValue = {};
    this.timerLabel = {};

    this.allCells = [];
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
        Utility.switchProperty('disabled', true, ...this.allCells);
        this.timerValue.classList.add('gameOver');
      }
    }, 1000);
  }

  preview(duration, tableOfmatches, onPreviewEnd) {
    this.allCells = Utility.selectElementsByClasses('cells');
    this.allCells.forEach((cell) => {
      const image = Utility.createElement('img', 'image');
      image.src = `./img/cells/${tableOfmatches[cell.dataset.x][cell.dataset.y]}.png`;
      cell.appendChild(image);
    });
    this.previewTimeout = setTimeout(() => {
      this.allCells.forEach((cell) => {
        cell.disabled = false;
        cell.childNodes.item(0).remove();
      });
      onPreviewEnd();
    }, duration * 1000);
  }

  clear() {
    clearTimeout(this.gameoverTimeout);
    clearTimeout(this.previewTmerId);
  }

  parseTime(totallTime) {
    this.minutes = Math.floor(totallTime / 60);
    this.seconds = totallTime % 60;
    this.minutes = this.minutes < 10 ? `0${this.minutes}` : this.minutes;
    this.seconds = this.seconds < 10 ? `0${this.seconds}` : this.seconds;
  }
}
