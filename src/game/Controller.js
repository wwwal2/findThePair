import Utility from './Utility';

class Controller {
  constructor(target, settings) {
    this.target = Utility.selectElements(target);
    this.innerElements = Array.from(this.target[0].children);
    [this.label, this.increase, this.value, this.reduce] = this.innerElements;

    this.value.innerText = settings.default;

    this.increase.onclick = () => {
      if (Number(this.value.innerText) < settings.max) {
        this.value.innerText = Number(this.value.innerText) + 1;
      }
    };
    this.reduce.onclick = () => {
      if (Number(this.value.innerText) > settings.min) {
        this.value.innerText = Number(this.value.innerText) - 1;
      }
    };
  }
}

export default Controller;
