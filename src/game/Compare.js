import Utility from './Utility';

class Compare {
  constructor() {
    this.counter = 0;
    this.comparable = 0;
  }

  open(target, num) {
    target.disabled = true;
    this.comparable = target;
    this.comparable.num = num;
  }

  insertImage(domElement, num) {
    this.image = Utility.createElement('img', 'image');
    this.image.src = `./img/${num}.png`;
    domElement.appendChild(this.image);
  }

  match(event, num) {
    if (this.comparable === 0) {
      this.comparable = 0;
      this.insertImage(event.target, num);
      this.counter += 1;
      event.target.disabled = true;
      return;
    }
    if (this.comparable.num === num) {
      this.comparable = 0;
      this.insertImage(event.target, num);
      this.counter = 0;
      event.target.disabled = true;
    } else {
      this.insertImage(event.target, num);
      event.target.disabled = true;
      setTimeout(() => {
        event.target.children.item(0).remove();
        this.comparable.children.item(0).remove();
        this.comparable = 0;
      }, 1000);

    }
  }
}

export default Compare;
