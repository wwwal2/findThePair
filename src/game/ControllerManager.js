import Utility from './Utility';

export default class ControllerManager {
  constructor(saveSettings, buildField, removeField) {
    this.saveSettings = saveSettings;
    this.buildFied = buildField;
    this.removeField = removeField;
    this.fraction = {};
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
      const newController = this[name];
      [newController.dom] = Utility.selectElementsByClasses(name);
      newController.dom.innerElements = Array.from(newController.dom.children);
      [
        newController.dom.label,
        newController.dom.increase,
        newController.dom.value,
        newController.dom.reduce,
      ] = newController.dom.innerElements;

      [
        newController.default,
        newController.min,
        newController.max,
      ] = Object.values(settings[name]);

      this.addMouseEvents(name);

      newController.current = newController.default;
      this.initialValidation(name);
      this.checkHighlightLimit(name);
      newController.dom.value.innerText = newController.current;
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
    this.saveSettings();
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
    const odd = this.fraction.current % 2;
    if (!odd) {
      return this[target].current;
    }
    if (distance) {
      return this[target].current + this.direction;
    }
    return this[target].current - this.direction;
  }

  initialValidation(name) {
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
  }

  addMouseEvents(name) {
    this[name].dom.increase.onclick = () => {
      if (name === 'fraction' && this.fraction.current !== this.fraction.max) {
        this.removeField();
        this.buildFied(this.fraction.current + 2);
      }
      this.controllerHandler(name, 1, this[name].max);
    };
    this[name].dom.reduce.onclick = () => {
      if (name === 'fraction' && this.fraction.current !== this.fraction.min) {
        this.removeField();
        this.buildFied(this.fraction.current - 2);
      }
      this.controllerHandler(name, -1, this[name].min);
    };

    this[name].dom.onmouseover = () => {
      this.optionsBar.innerText = this[name].dom.label.innerText;
    };
    this[name].dom.onmouseout = () => {
      this.optionsBar.innerText = 'OPTIONS';
    };
  }

  switchClasses(element, from, to) {
    element.classList.remove(from);
    element.classList.add(to);
  }

  show() {
    Utility.switchProperty('className', 'inform-pannel', this.informPannel);
  }

  hide() {
    Utility.switchProperty('className', 'remove', this.informPannel);
  }
}
