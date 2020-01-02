import Utility from './Utility';
import Compare from './Compare';
import question from '../img/question.jpg';
import { FROZEN, ACTIVE } from './constants';

export default class Field {
  constructor(winCheck) {
    this.tableOfmatches = [];
    this.domLocation = {};
    this.allCells = [];
    this.compare = new Compare();
    this.winCheck = winCheck;
  }

  build(fraction) {
    this.tableOfmatches = [];
    const btnNum = fraction * fraction;
    this.randomValues = Utility.generateRandomValues(Math.floor(btnNum / 2));
    [this.domLocation] = Utility.selectElementsByClasses('field-container');

    for (let i = 0; i < fraction; i += 1) {
      this.tableOfmatches.push([]);
      for (let j = 0; j < fraction; j += 1) {
        const image = Utility.createImg('cells apply-fadeIn', i, j);
        image.src = question;
        image.onclick = (e) => this.clickCell(e);
        image.dataset.state = FROZEN;
        this.allCells.push(image);
        this.domLocation.appendChild(image);
        this.tableOfmatches[i].push(this.randomValues.pop());
      }
      this.domLocation.style.gridTemplateColumns = `repeat(${fraction}, 1fr)`;
      this.domLocation.classList.remove('hidden');
    }
  }

  showAll() {
    this.allCells.forEach((cell) => {
      cell.src = `./img/cells/${this.tableOfmatches[cell.dataset.x][cell.dataset.y]}.png`;
    });
  }

  hideAll() {
    this.allCells.forEach((cell) => {
      cell.src = question;
      cell.dataset.state = ACTIVE;
    });
  }

  freezeAll() {
    this.allCells.forEach((cell) => {
      cell.dataset.state = FROZEN;
    });
  }

  clickCell(event) {
    const imgSrc = this.tableOfmatches[event.target.dataset.x][event.target.dataset.y];
    this.compare.init(event, imgSrc);
    this.winCheck();
  }

  removeField() {
    if (this.domLocation.childNodes) {
      this.domLocation.innerHTML = '';
      this.allCells = [];
    }
  }
}
