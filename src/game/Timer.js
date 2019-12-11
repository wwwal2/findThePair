import Utility from './Utility';

export default class Timer {
  constructor() {
    this.timerId = 0;
    this.totallTime = 0;
    this.minutes = 0;
    this.seconds = 0;
  }

  start(duration) {
    const timerValue = Utility.selectElements('timer-value')[0];
    this.totallTime = Number(duration) * 60;

    this.timerId = setInterval(() => {
      this.totallTime = this.totallTime - 1;
      this.minutes = Math.floor(this.totallTime / 60);
      this.seconds = this.totallTime % 60;
      timerValue.innerText = `${this.minutes} : ${this.seconds}`;

      if (this.totallTime === 0) {
        this.clear();
      }
    }, 1000);
  }

  clear() {
    clearTimeout(this.timerId);
  }
}
