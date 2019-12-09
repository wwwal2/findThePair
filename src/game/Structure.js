import Button from './Buttion';
import Utility from './Utility';

class Structure {
  constructor() {
    this.table = [];
    this.gameElements = [];
    this.image = {};
  }

  Build(settings) {
    const btnNum = settings.height * settings.width;
    const odd = btnNum % 2;
    const randomValues = Utility.generateRandomValues(Math.floor(btnNum / 2));

    const structure = Utility.selectElements('field-container')[0];

    for (let i = 1; i <= settings.height; i += 1) {
      const row = Utility.createElement('div', 'row');
      this.table.push([]);
      for (let j = 1; j <= settings.width; j += 1) {
        if (odd && i === Number(settings.height) && j === Number(settings.width)) {
          break;
        }
        const button = new Button.Create('cells', i, j);
        row.appendChild(button);
        this.table[i - 1].push(randomValues.pop());
      }
      structure.appendChild(row);
    }
  }
}
export default Structure;
