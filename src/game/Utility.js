export default class Utility {
  static createElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
  }

  static selectElements(...classes) {
    return classes.reduce(
      (acc, current) => acc.concat(
        Array.from(document.body.getElementsByClassName(current)),
      ), [],
    );
  }

  static switchProperty(propertyName, value, elements) {
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

  static addEvent(event, target) {
    Utility
      .selectElements(target)
      .forEach((elem) => {
        elem.onclick = event;
      });
  }

  // static validation(limit) {
  //   const height = this.height.value.innerText;
  //   const width = Number(this.width.value.innerText);
  //   const odd = (height * width) % 2;

  //   if (odd && this.direction === 'increasing') {
  //     this.width.value.innerText = width + 1;
  //   }
  //   if (odd && this.direction === 'reducing') {
  //     this.width.value.innerText = width - 1;
  //   }
  // }
}
