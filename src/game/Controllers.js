import Utility from './Utility';

export default class Controllers {
  add(name, target, settings) {
    const { standard, max, min } = settings;
    [this[name]] = Utility.selectElements(target);
    this[name].innerElements = Array.from(this[name].children);
    [
      this[name].label,
      this[name].increase,
      this[name].value,
      this[name].reduce,
    ] = this[name].innerElements;
    this.direction = 1;

    this[name].value.innerText = standard;

    this[name].increase.onclick = () => {
      const number = Number(this[name].value.innerText);
      if (number < max) {
        this.direction = 1;
        this[name].value.innerText = number + this.direction;
        this.validation(name, max - this[name].value.innerText);
      }
    };

    this[name].reduce.onclick = () => {
      const number = Number(this[name].value.innerText);
      if (number > min) {
        this.direction = -1;
        this[name].value.innerText = number + this.direction;
        this.validation(name, this[name].value.innerText - min);
      }
    };
  }

  validation(target, distance) {
    const height = this.height.value.innerText;
    const width = this.width.value.innerText;
    const num = Number(this[target].value.innerText);
    const odd = (height * width) % 2;
    if (!odd) {
      return;
    }
    if (distance) {
      this[target].value.innerText = num + this.direction;
    } else {
      this[target].value.innerText = num - this.direction;
    }
  }

  display(position, {
    height, width, preview, gameOver,
  }
  ) {
    if (position === 'hide') {
      Utility.switchProperty('className', 'remove', height, width, preview, gameOver);
    } else {
      Utility.switchProperty('className', 'controller', height, width, preview, gameOver);
    }
  }
}