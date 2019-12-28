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

  static addZero(num) {
    if (num < 10) {
      return `0${num}`;
    }
    return num;
  }

  static createImg(className, x, y) {
    const image = Utility.createElement('img', className);
    image.disabled = true;
    image.dataset.x = x;
    image.dataset.y = y;
    return image;
  }
}
