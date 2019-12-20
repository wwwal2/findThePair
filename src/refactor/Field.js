import Utility from './Utility';
import Button from './Button';
import Compare from './Compare';

export default class Field {
  constructor() {
    this.tableOfmatches = [];
    this.domLocation = {};
    this.compare = new Compare();
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
        row.appendChild(button);
        this.tableOfmatches[i].push(this.randomValues.pop());
      }
      this.domLocation.appendChild(row);
    }
  }

  clickCell(event) {
    const imgSrc = this.tableOfmatches[event.target.dataset.x][event.target.dataset.y];
    this.compare.collect(event, imgSrc);
  }

  removeField() {
    if (this.domLocation.childNodes) {
      this.domLocation.innerHTML = '';
    }
  }
}
