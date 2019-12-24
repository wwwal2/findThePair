export default class Utility {
  static createElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
  }

  static selectElementsByClasses(...classes) {
    return classes.reduce(
      (acc, current) => acc.concat(
        Array.from(document.body.getElementsByClassName(current)),
      ), [],
    );
  }

  static switchProperty(propertyName, value, ...elements) {
    return elements.forEach((obj) => {
      obj[propertyName] = value;
    });
  }

  static generateRandomValues(numLength) {
    const randomValues = [];
    for (let i = numLength; i > 0; i -= 1) {
      randomValues.push(i);
    }
    return randomValues.concat(randomValues).sort(() => Math.random() - 0.5);
  }

  static createBtn(className, x, y) {
    const btn = Utility.createElement('button', className);
    btn.disabled = false;
    btn.dataset.x = x;
    btn.dataset.y = y;
    return btn;
  }
}
