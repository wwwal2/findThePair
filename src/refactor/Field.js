import Utility from './Utility';
import Button from './Button';

export default class Field {
  constructor() {
    this.tableOfmatches = [];
    this.domLocation = {};
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
        row.appendChild(button);
        this.tableOfmatches[i].push(this.randomValues.pop());
      }
      this.domLocation.appendChild(row);
    }
  }

  removeField() {
    if (this.domLocation.childNodes) {
      this.domLocation.innerHTML = '';
    }
  }
}
