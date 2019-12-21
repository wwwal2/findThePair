import Utility from './Utility';
import Button from './Button';
import Compare from './Compare';

export default class Field {
  constructor(winCheck) {
    this.tableOfmatches = [];
    this.domLocation = {};
    this.allCells = [];
    this.compare = new Compare();
    this.winCheck = winCheck;
  }

  build(width, height) {
    this.tableOfmatches = [];
    const btnNum = height * width;
    this.randomValues = Utility.generateRandomValues(Math.floor(btnNum / 2));
    [this.domLocation] = Utility.selectElementsByClasses('field-container');

    for (let i = 0; i < height; i += 1) {
      const row = Utility.createElement('div', 'row');
      this.tableOfmatches.push([]);
      for (let j = 0; j < width; j += 1) {
        const button = new Button.Create('cells', i, j);
        button.addEventListener('click', (e) => this.clickCell(e));
        button.disabled = true;
        this.allCells.push(button);
        row.appendChild(button);
        this.tableOfmatches[i].push(this.randomValues.pop());
      }
      this.domLocation.appendChild(row);
    }
  }

  showAll() {
    this.allCells.forEach((cell) => {
      const image = Utility.createElement('img', 'image');
      image.src = `./img/cells/${this.tableOfmatches[cell.dataset.x][cell.dataset.y]}.png`;
      cell.appendChild(image);
    });
  }

  hideAll() {
    this.allCells.forEach((cell) => {
      cell.disabled = false;
      cell.childNodes.item(0).remove();
    });
  }

  clickCell(event) {
    const imgSrc = this.tableOfmatches[event.target.dataset.x][event.target.dataset.y];
    this.compare.collect(event, imgSrc);
    this.winCheck();
  }

  removeField() {
    if (this.domLocation.childNodes) {
      this.domLocation.innerHTML = '';
      this.allCells = [];
    }
  }
}
