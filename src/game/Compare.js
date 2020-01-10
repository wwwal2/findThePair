import cardBack from '../img/cardBack.jpg';
import { FROZEN, ACTIVE, OPENED } from './constants';

class Compare {
  constructor() {
    this.counter = 0;
    this.openImgTimeout = 0;
    this.bufferCell = {};
    this.nextBufferCell = {};
  }

  init(event, imgSrc) {
    if (event.target.dataset.state !== FROZEN && event.target.dataset.state !== OPENED) {
      event.target.dataset.state = FROZEN;
      this.collect(event, imgSrc);
    }
  }

  collect(event, imgSrc) {
    switch (this.counter) {
      case 0:
        this.counter += 1;
        this.swapImage(event, imgSrc, 'bufferCell');
        break;
      case 1:
        this.counter += 1;
        this.swapImage(event, imgSrc, 'nextBufferCell');
        this.match();
        break;
      default:
        event.target.dataset.state = ACTIVE;
        event.target.classList.remove('apply-fadeIn');
        event.target.classList.add('apply-shake');
        setTimeout(() => {
          event.target.classList.remove('apply-shake');
        }, 1000);
        break;
    }
  }

  match() {
    if (this.bufferCell.imgSrc === this.nextBufferCell.imgSrc) {
      this.bufferCell.dataset.state = OPENED;
      this.nextBufferCell.dataset.state = OPENED;
      this.clear();
    } else {
      this.openImgTimeout = setTimeout(() => {
        this.swapBack(this.bufferCell);
        this.swapBack(this.nextBufferCell);
        this.clear();
      }, 1000);
    }
  }

  swapImage(event, imgSrc, bufferElementName) {
    event.target.src = `img/cells/${imgSrc}.png`;
    this[bufferElementName] = event.target;
    this[bufferElementName].imgSrc = imgSrc;
    this[bufferElementName].classList.remove('cursor-pointer');
  }

  swapBack(target) {
    target.dataset.state = ACTIVE;
    target.src = cardBack;
    target.classList.add('cursor-pointer');
  }

  clear() {
    this.counter = 0;
    this.nextBufferCell = 0;
    this.bufferCell = 0;
  }

  abort() {
    if (this.bufferCell) {
      this.bufferCell.src = cardBack;
    }
    if (this.nextBufferCell) {
      this.nextBufferCell.src = cardBack;
    }
    clearTimeout(this.openImgTimeout);
    this.clear();
  }
}

export default Compare;
