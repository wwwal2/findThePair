import Utility from './Utility';

class Controller {
  constructor() {
    this.domTarget = [];
    this.innerElements = [];
    this.label = {};
    this.value = {};
    this.increase = {};
    this.reduce = {};
  }

  create(target, settings) {
    this.domTarget = Utility.selectElements(target);
    this.innerElements = Array.from(this.domTarget[0].children);
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
    return this.value.innerText;
  }
}

export default Controller;
