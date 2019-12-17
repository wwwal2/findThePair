import Utility from './Utility';

export default class Compare {
  constructor() {
    this.counter = 0;
    this.bufferElement = 0;
    this.openImgTimeout = 0;
  }

  insertImage(event, num) {
    event.target.disabled = true;
    this.image = Utility.createElement('img', 'image');
    this.image.src = `./img/cells/${num}.png`;
    event.target.appendChild(this.image);
  }

  removeImage(target) {
    target.disabled = false;
    target.children.item(0).remove();
  }

  match(event, num) {
    if (this.bufferElement === 0) {
      this.insertImage(event, num);
      this.bufferElement = event.target;
      this.bufferElement.num = num;
      this.counter += 1;
      return;
    }

    if (this.bufferElement.num === num && this.counter < 2) {
      this.insertImage(event, num);
      this.bufferElement = 0;
      this.counter = 0;
      return;
    }

    if (this.counter < 2) {
      this.insertImage(event, num);
      this.counter += 1;
      this.openImgTimeout = setTimeout(() => {
        this.removeImage(this.bufferElement);
        this.removeImage(event.target);
        this.counter = 0;
        this.bufferElement = 0;
      }, 1000);
    } else {
      event.target.classList.add('apply-shake');
      setTimeout(() => {
        event.target.classList.remove('apply-shake');
      }, 1000);
    }
  }
}
