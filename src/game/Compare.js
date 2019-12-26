import cover from '../img/question.jpg';

export default class Compare {
  constructor() {
    this.counter = 0;
    this.openImgTimeout = 0;
    this.bufferCell = {};
    this.nextBufferCell = {};
  }

  init(event, imgSrc) {
    if (event.target.dataset.click !== 'clicked') {
      event.target.dataset.click = 'clicked';
      this.collect(event, imgSrc);
    }
  }

  collect(event, imgSrc) {
    switch (this.counter) {
      case 0:
        this.counter += 1;
        this.swapImage(event, imgSrc);
        this.bufferCell = event.target;
        this.bufferCell.imgSrc = imgSrc;
        break;
      case 1:
        this.counter += 1;
        this.swapImage(event, imgSrc);
        this.nextBufferCell = event.target;
        this.nextBufferCell.imgSrc = imgSrc;
        this.match();
        break;
      default:
        event.target.dataset.click = '';
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
        this.swapBack(this.bufferCell);
        this.swapBack(this.nextBufferCell);
        this.clear();
      }, 1000);
    }
  }

  swapImage(event, imgSrc) {
    event.target.src = `img/cells/${imgSrc}.png`;
  }

  swapBack(target) {
    target.dataset.click = '';
    target.src = cover;
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
