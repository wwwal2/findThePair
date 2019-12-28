import Utility from './Utility';

export default class Timer {
  constructor(showAll, hideAll, freezeAll, abortCompare) {
    this.showAll = showAll;
    this.hideAll = hideAll;
    this.freezeAll = freezeAll;
    this.abortCompare = abortCompare;

    this.totallTime = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.timerValue = {};
    this.timerLabel = {};

    this.previewTimeout = 0;
    this.gameoverTimeout = 0;
  }

  begin(previewTime, gameoverTime) {
    this.showAll();
    [this.timerContainer] = Utility.selectElementsByClasses('timer-container');
    [this.timerValue] = Utility.selectElementsByClasses('timer-value');
    [this.timerLabel] = Utility.selectElementsByClasses('timer-label');
    this.previewTimeout = setTimeout(() => {
      this.hideAll();
      this.startTimer(gameoverTime);
    }, previewTime * 1000);
  }

  startTimer(duration) {
    this.timerContainer.classList.remove('remove');

    this.totallTime = Number(duration) * 60;
    this.parseTime(this.totallTime);
    this.timerValue.innerText = `${this.minutes}:${this.seconds}`;

    this.gameoverTimeout = setInterval(() => {
      this.totallTime -= 1;
      this.parseTime(this.totallTime);
      this.timerValue.innerText = `${this.minutes}:${this.seconds}`;

      if (this.totallTime === 0) {
        this.freezeAll();
        this.clear();
      }
    }, 1000);
  }

  clear() {
    clearTimeout(this.gameoverTimeout);
    clearTimeout(this.previewTimeout);
    if (this.timerValue.innerText !== '') {
      this.timerValue.classList.add('gameOver');
      this.abortCompare();
    } else {
      this.hideAll();
    }
    this.freezeAll();
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
