import Utility from './Utility';

export default class Compare {
  constructor() {
    this.counter = 0;
    this.openImgTimeout = 0;
    this.bufferCell = {};
    this.nextBufferCell = {};
  }

  collect(event, imgSrc) {
    switch (this.counter) {
      case 0:
        this.counter += 1;
        this.insertImage(event, imgSrc);
        this.bufferCell = event.target;
        this.bufferCell.imgSrc = imgSrc;
        break;
      case 1:
        this.counter += 1;
        this.insertImage(event, imgSrc);
        this.nextBufferCell = event.target;
        this.nextBufferCell.imgSrc = imgSrc;
        this.match();
        break;
      default:
        event.target.classList.add('apply-shake');
        setTimeout(() => {
          event.target.classList.remove('apply-shake');
        }, 1000);
        break;
    }
  }

  match() {
    if (this.bufferCell.imgSrc === this.nextBufferCell.imgSrc) {
      this.clear();
    } else {
      this.openImgTimeout = setTimeout(() => {
        this.removeImage(this.bufferCell);
        this.removeImage(this.nextBufferCell);
        this.clear();
      }, 1000);
    }
  }

  insertImage(event, imgSrc) {
    event.target.disabled = true;
    this.image = Utility.createElement('img', 'image');
    this.image.src = `./img/cells/${imgSrc}.png`;
    event.target.appendChild(this.image);
  }

  removeImage(target) {
    target.disabled = false;
    target.children.item(0).remove();
  }

  clear() {
    this.counter = 0;
    this.nextBufferCell = 0;
    this.bufferCell = 0;
  }

  abort() {
    if (this.bufferCell.children) {
      this.bufferCell.children.item(0).remove();
    }
    if (this.nextBufferCell.children) {
      this.nextBufferCell.children.item(0).remove();
    }
    clearTimeout(this.openImgTimeout);
    this.clear();
  }
}
