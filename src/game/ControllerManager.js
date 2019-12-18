import Utility from './Utility';

export default class ControllerManager {
  constructor() {
    this.settings = {
      height: 0,
      width: 0,
      preview: 0,
      gameover: 0,
    };
    this.direction = 1;
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
      this.controllerEvent(name, 1, max);
    };

    this[name].reduce.onclick = () => {
      this.controllerEvent(name, -1, min);
    };
    this.validation(name, max - standard);
  }

  controllerEvent(target, direction, limit) {
    this.direction = direction;
    switch (direction) {
      case 1:
        if (this.settings[target] < limit) {
          this.settings[target] += this.direction;
          this.switchClasses(this[target].reduce, 'down-limit', 'down');
          this.validation(target, limit - this.settings[target]);
          if (this.settings[target] === limit) {
            this.switchClasses(this[target].increase, 'up', 'up-limit');
          }
        }
        break;
      case -1:
        if (this.settings[target] > limit) {
          this.settings[target] += this.direction;
          this.switchClasses(this[target].increase, 'up-limit', 'up');
          this.validation(target, this.settings[target] - limit);
          if (this.settings[target] === limit) {
            this.switchClasses(this[target].reduce, 'down', 'down-limit');
          }
        }
        break;
      default:
    }
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
