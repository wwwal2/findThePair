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
    [this.optionsBar] = Utility.selectElementsByClasses('options');
    [this.informPannel] = Utility.selectElementsByClasses('inform-pannel');

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
        this.optionsBar.innerText = this[name].dom.label.innerText;
      };
      this[name].dom.onmouseout = () => {
        this.optionsBar.innerText = 'OPTIONS';
      };
      this[name].current = this[name].default;

      // validation
      this.direction = 1;
      this[name].current = this.validate(
        name,
        this[name].max - this[name].current,
        this[name].max,
      );
      this.direction = -1;
      this[name].current = this.validate(
        name,
        this[name].current - this[name].min,
        this[name].min,
      );

      this.checkHighlightLimit(name);
      this[name].dom.value.innerText = this[name].current;
    });
  }

  controllerHandler(target, direction, limit) {
    this.direction = direction;
    switch (direction) {
      case 1:
        this[target].current += 1;
        this[target].current = this.validate(target, limit - this[target].current, limit);
        this[target].dom.value.innerText = this[target].current;
        this.checkHighlightLimit(target);
        break;
      case -1:
        this[target].current -= 1;
        this[target].current = this.validate(target, this[target].current - limit, limit);
        this[target].dom.value.innerText = this[target].current;
        this.checkHighlightLimit(target);
        break;
      default:
    }
  }

  checkHighlightLimit(target) {
    if (this[target].current === this[target].max) {
      this.switchClasses(this[target].dom.increase, 'up', 'up-limit');
    } else {
      this.switchClasses(this[target].dom.increase, 'up-limit', 'up');
    }
    if (this[target].current === this[target].min) {
      this.switchClasses(this[target].dom.reduce, 'down', 'down-limit');
    } else {
      this.switchClasses(this[target].dom.reduce, 'down-limit', 'down');
    }
  }

  validate(target, distance, limit) {
    if (distance < 0) {
      return limit;
    }
    const odd = (this.height.current * this.width.current) % 2;
    if (!odd) {
      return this[target].current;
    }
    if (distance) {
      return this[target].current + this.direction;
    }
    return this[target].current - this.direction;
  }

  switchClasses(element, from, to) {
    element.classList.remove(from);
    element.classList.add(to);
  }

  display(position) {
    if (position === 'none') {
      Utility.switchProperty('className', 'remove', this.informPannel);
    } else {
      Utility.switchProperty('className', 'inform-pannel', this.informPannel);
    }
  }
}
