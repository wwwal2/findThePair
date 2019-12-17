import Utility from './Utility';

export default class ControllerManager {
  add(name, target, settings) {
    const { standard, max, min } = settings;

    [this[name]] = Utility.selectElements(target);
    [this.informPannel] = Utility.selectElements('inform-pannel');

    [this.options] = Utility.selectElements('options');

    this[name].onmouseover = () => {
      this.options.innerText = this[name].label.innerText;
    };
    this[name].onmouseout = () => {
      this.options.innerText = 'OPTIONS';
    }

    this[name].innerElements = Array.from(this[name].children);
    [
      this[name].label,
      this[name].increase,
      this[name].value,
      this[name].reduce,
    ] = this[name].innerElements;

    this.direction = 1;

    this[name].value.innerText = standard;

    if (standard === max) {
      this[name].increase.classList.remove('up');
      this[name].increase.classList.add('up-limit');
    }
    if (standard === min) {
      this[name].reduce.classList.add('down-limit');
      this[name].reduce.classList.remove('down');
    }

    this[name].increase.onclick = () => {
      let number = Number(this[name].value.innerText);

      if (number < max) {
        this.direction = 1;
        this[name].value.innerText = number + this.direction;
        this.validation(name, max - this[name].value.innerText);
        number = this[name].value.innerText;
      }

      if (Number(this[name].value.innerText) === max) {
        this[name].increase.classList.remove('up');
        this[name].increase.classList.add('up-limit');
      } else {
        this[name].reduce.classList.remove('down-limit');
        this[name].reduce.classList.add('down');
      }
    };

    this[name].reduce.onclick = () => {
      const number = Number(this[name].value.innerText);

      if (number > min) {
        this.direction = -1;
        this[name].value.innerText = number + this.direction;
        this.validation(name, this[name].value.innerText - min);
      }

      if (Number(this[name].value.innerText) === min) {
        this[name].reduce.classList.add('down-limit');
        this[name].reduce.classList.remove('down');
      } else {
        this[name].increase.classList.remove('up-limit');
        this[name].increase.classList.add('up');
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

  display(position) {
    if (position === 'hide') {
      Utility.switchProperty('className', 'remove', this.informPannel);
    } else {
      Utility.switchProperty('className', 'inform-pannel', this.informPannel);
    }
  }
}
