import Button from './Buttion';
import Utility from './Utility';

export default class Structure {
  constructor() {
    this.tableOfmatches = [];
    this.location = {};
    this.randomValues = [];
    this.allCells = [];
    this.previewTimeout = 0;
  }

  build(settings) {
    const { width, height } = settings;
    this.tableOfmatches = [];
    const btnNum = height * width;
    const odd = btnNum % 2;
    this.randomValues = Utility.generateRandomValues(Math.floor(btnNum / 2));

    [this.location] = Utility.selectElements('field-container');
    for (let i = 0; i < height; i += 1) {
      const row = Utility.createElement('div', 'row');
      this.tableOfmatches.push([]);
      for (let j = 0; j < width; j += 1) {
        if (odd && i === Number(height) - 1 && j === Number(width) - 1) {
          break;
        }
        const button = new Button.Create('cells', i, j);
        row.appendChild(button);
        this.tableOfmatches[i].push(this.randomValues.pop());
      }
      this.location.appendChild(row);
    }
  }

  preview(duration) {
    this.allCells = Utility.selectElements('cells');
    this.allCells.forEach((cell) => {
      cell.disabled = true;
      const image = Utility.createElement('img', 'image');
      image.src = `./img/${this.tableOfmatches[cell.dataset.x][cell.dataset.y]}.png`;
      cell.appendChild(image);
    });
    this.previewTimeout = setTimeout(() => {
      this.allCells.forEach((cell) => {
        cell.disabled = false;
        cell.childNodes.item(0).remove();
      });
    }, duration * 1000);
  }

  remove() {
    if (this.location.childNodes) {
      this.location.innerHTML = '';
    }
  }
}
