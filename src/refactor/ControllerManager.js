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

      this[name].current = this[name].current - this[name].max > 0
        ? this.validate(name, this[name].max - this[name].current, this[name].max)
        : this.validate(name, this[name].current - this[name].min, this[name].min);

      if (this[name].current === this[name].max) this.highlightLimit('up', name);
      if (this[name].current === this[name].min) this.highlightLimit('down', name);

      this[name].dom.value.innerText = this[name].current;
    });
  }

  controllerHandler(target, direction, limit) {
    this.direction = direction;
    switch (direction) {
      case 1:
        this[target].current = this.validate(target, limit - this[target].current, limit);
        this[target].dom.value.innerText = this[target].current;
        if (this[target].current === limit) {
          this.highlightLimit('up', target);
        }
        this.switchClasses(this[target].dom.reduce, 'down-limit', 'down');
        break;
      case -1:
        this[target].current = this.validate(target, this[target].current - limit, limit);
        this[target].dom.value.innerText = this[target].current;
        if (this[target].current === limit) {
          this.highlightLimit('down', target);
        }
        this.switchClasses(this[target].dom.increase, 'up-limit', 'up');
        break;
      default:
    }
  }

  highlightLimit(direction, target) {
    if (direction === 'up') {
      this.switchClasses(this[target].dom.increase, 'up', 'up-limit');
    } else {
      this.switchClasses(this[target].dom.reduce, 'down', 'down-limit');
    }
  }

  validate(target, distance, limit) {
    if (distance < 0) {
      return limit;
    }
    const odd = (this.height.current * this.width.current) % 2;
    if (odd && distance > 1) {
      return this[target].current + this.direction + this.direction;
    }
    if (distance > 0) {
      return this[target].current + this.direction;
    }
    return this[target].current;
  }

  switchClasses(element, from, to) {
    element.classList.remove(from);
    element.classList.add(to);
  }
}
