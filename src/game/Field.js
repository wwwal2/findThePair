import Button from './Buttion';
import Utility from './Utility';
import congratulations from '../img/congratulations.png';

export default class Field {
  constructor() {
    this.tableOfmatches = [];
    this.location = {};
    this.randomValues = [];
    this.allCells = [];
    this.previewTimeout = 0;
    this.previewAbort = true;
    this.cellsLeft = [];
  }

  build(settings) {
    const { width, height } = settings;
    this.tableOfmatches = [];
    const btnNum = height * width;
    this.randomValues = Utility.generateRandomValues(Math.floor(btnNum / 2));

    [this.location] = Utility.selectElements('field-container');
    for (let i = 0; i < height; i += 1) {
      const row = Utility.createElement('div', 'row');
      this.tableOfmatches.push([]);
      for (let j = 0; j < width; j += 1) {
        const button = new Button.Create('cells', i, j);
        row.appendChild(button);
        this.tableOfmatches[i].push(this.randomValues.pop());
      }
      this.location.appendChild(row);
    }
  }

  preview(duration, startGameoverTimer) {
    this.previewAbort = true;
    this.allCells = Utility.selectElements('cells');
    this.allCells.forEach((cell) => {
      cell.disabled = true;
      const image = Utility.createElement('img', 'image');
      image.src = `./img/cells/${this.tableOfmatches[cell.dataset.x][cell.dataset.y]}.png`;
      cell.appendChild(image);
    });
    this.previewTimeout = setTimeout(() => {
      this.removeAllImages();
      startGameoverTimer();
      this.previewAbort = false;
    }, duration * 1000);
  }

  removeField() {
    if (this.location.childNodes) {
      this.location.innerHTML = '';
    }
  }

  removeAllImages() {
    this.allCells.forEach((cell) => {
      cell.disabled = false;
      cell.childNodes.item(0).remove();
    });
  }

  congratulations(timerId) {
    this.cellsLeft = this.allCells.filter((cell) => cell.childElementCount === 1);
    if (this.cellsLeft.length === this.allCells.length) {
      this.removeField();
      const img = Utility.createElement('img', 'congratulation');
      img.src = congratulations;
      img.style.backgroundColor = 'transparent';
      this.location.appendChild(img);
      clearTimeout(timerId);
    }
  }


}
