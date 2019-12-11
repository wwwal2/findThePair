import Button from './Buttion';
import Utility from './Utility';

class Structure {
  constructor() {
    this.tableOfmatches = [];
    this.location = {};
    this.randomValues = [];
  }

  Build({ height, width }) {
    this.tableOfmatches = [];
    const btnNum = height * width;
    const odd = btnNum % 2;
    this.randomValues = Utility.generateRandomValues(Math.floor(btnNum / 2));

    [this.location] = Utility.selectElements('field-container');
    for (let i = 1; i <= height; i += 1) {
      const row = Utility.createElement('div', 'row');
      this.tableOfmatches.push([]);
      for (let j = 1; j <= width; j += 1) {
        if (odd && i === Number(height) && j === Number(width)) {
          break;
        }
        const button = new Button.Create('cells', i, j);
        row.appendChild(button);
        this.tableOfmatches[i - 1].push(this.randomValues.pop());
      }
      this.location.appendChild(row);
    }
  }

  Remove() {
    if (this.location.childNodes) {
      this.location.innerHTML = '';
    }
  }
}
export default Structure;
