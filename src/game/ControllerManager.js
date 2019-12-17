import Utility from './Utility';

export default class ControllerManager {
  constructor() {
    this.settings = {
      height: 0,
      width: 0,
      preview: 0,
      gameover: 0,
    };
    this.direction = 0;
  }

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
    };

    this[name].innerElements = Array.from(this[name].children);
    [
      this[name].label,
      this[name].increase,
      this[name].value,
      this[name].reduce,
    ] = this[name].innerElements;

    this.settings[name] = standard;
    this[name].value.innerText = this.settings[name];

    if (standard === max) this.switchClasses(this[name].increase, 'up', 'up-limit');
    if (standard === min) this.switchClasses(this[name].reduce, 'down', 'down-limit');

    this[name].increase.onclick = () => {
      this.direction = 1;
      if (this.settings[name] < max) {
        this.settings[name] = this.settings[name] + this.direction;
        this.validation(name, max - this.settings[name]);
      }

      if (this.settings[name] === max) {
        this.switchClasses(this[name].increase, 'up', 'up-limit');
      } else {
        this.switchClasses(this[name].reduce, 'down-limit', 'down');
      }
    };

    this[name].reduce.onclick = () => {
      this.direction = -1;
      if (this.settings[name] > min) {
        this.settings[name] = this.settings[name] + this.direction;
        this.validation(name, this.settings[name] - min);
      }

      if (this.settings[name] === min) {
        this.switchClasses(this[name].reduce, 'down', 'down-limit');
      } else {
        this.switchClasses(this[name].increase, 'up-limit', 'up');
      }
    };
  }

  validation(target, distance) {
    const odd = (this.settings.height * this.settings.width) % 2;
    if (!odd) {
      this[target].value.innerText = this.settings[target];
      return;
    }
    if (distance) {
      this.settings[target] = this.settings[target] + this.direction;
    } else {
      this.settings[target] = this.settings[target] - this.direction;
    }
    this[target].value.innerText = this.settings[target];
  }

  display(position) {
    if (position === 'hide') {
      Utility.switchProperty('className', 'remove', this.informPannel);
    } else {
      Utility.switchProperty('className', 'inform-pannel', this.informPannel);
    }
  }

  switchClasses(element, from, to) {
    element.classList.remove(from);
    element.classList.add(to);
  }
}
