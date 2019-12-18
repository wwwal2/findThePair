import Utility from './Utility';

export default class ControllerManager {
  constructor() {
    this.height = {};
    this.width = {};
    this.preview = {};
    this.gameover = {};
    this.direction = 1;
  }

  addAll(settings) {
    [this.options] = Utility.selectElementsByClasses('options');

    const controllersNames = Object.keys(settings);

    controllersNames.forEach((name) => {
      this[name] = {};
      [this[name].dom] = Utility.selectElementsByClasses(name);
      this[name].dom.innerElements = Array.from(this[name].dom.children);
      [
        this[name].dom.label,
        this[name].dom.increase,
        this[name].dom.value,
        this[name].dom.reduce,
      ] = this[name].dom.innerElements;

      [
        this[name].default,
        this[name].min,
        this[name].max,
      ] = Object.values(settings[name]);
      this[name].current = this[name].default;

      this[name].dom.increase.onclick = () => {
        this.controllerHandler(name, 1, this[name].max);
      };
      this[name].dom.reduce.onclick = () => {
        this.controllerHandler(name, -1, this[name].min);
      };

      this[name].dom.onmouseover = () => {
        this.options.innerText = this[name].dom.label.innerText;
      };
      this[name].dom.onmouseout = () => {
        this.options.innerText = 'OPTIONS';
      };

      this[name].dom.value.innerText = this[name].current;
    });
  }

  controllerHandler(target, direction, limit) {
    this.direction = direction;
    switch (direction) {
      case 1:
        if (this[target].current < limit) {
          this[target].current += this.direction;
          this.switchClasses(this[target].dom.reduce, 'down-limit', 'down');

          this.validate(target, limit - this[target].max);

          if (this[target].current === limit) {
            this.switchClasses(this[target].dom.increase, 'up', 'up-limit');
          }
          this[target].dom.value.innerText = this[target].current;
        }
        break;
      case -1:
        if (this[target].current > limit) {
          this[target].current += this.direction;
          this.switchClasses(this[target].dom.increase, 'up-limit', 'up');

          this.validate(target, this[target].current - limit);

          if (this[target].current === limit) {
            this.switchClasses(this[target].dom.reduce, 'down', 'down-limit');
          }
          this[target].dom.value.innerText = this[target].current;
        }
        break;
      default:
    }
  }

  switchClasses(element, from, to) {
    element.classList.remove(from);
    element.classList.add(to);
  }

  validate(target, distance) {
    const odd = (this.height.current * this.width.current) % 2;
    if (!odd) {
      return;
    }
    if (distance) {
      this[target].current += this.direction;
    } else {
      this[target].current -= this.direction;
    }
  }
}
