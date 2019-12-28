import Field from './game/Field';
import Utility from './game/Utility';
import Timer from './game/Timer';
import ControllerManager from './game/ControllerManager';
import congratulationsImg from './img/congratulations.png';
import { START, STOP, OPENED } from './game/constants';

class Game {
  constructor(settings) {
    this.settings = settings;

    this.controllers = new ControllerManager(() => this.saveSettings());

    this.field = new Field(() => this.winCheck());

    this.timer = new Timer(
      () => this.field.showAll(),
      () => this.field.hideAll(),
      () => this.field.freezeAll(),
      () => this.field.compare.abort(),
    );

    this.startClass = START;
    this.startBtn = {};
    this.cellsLeft = [];
    this.congratulation = {};
  }

  run() {
    if (localStorage.getItem('FindThePair')) {
      this.readSettings();
    }

    this.controllers.addAll(this.settings);

    [this.startBtn] = Utility.selectElementsByClasses(this.startClass);
    this.startBtn.dataset.phase = START;

    this.startBtn.onclick = () => {
      this.clickStart();
    };
  }

  clickStart() {
    if (this.startBtn.dataset.phase === START) {
      this.start();
    } else {
      this.stop();
    }
  }

  start() {
    this.startBtn.dataset.phase = STOP;
    this.startBtn.innerText = STOP;
    this.controllers.hide();
    this.field.removeField();

    this.field.build(this.controllers.fraction.current);

    this.timer.begin(
      this.controllers.preview.current,
      this.controllers.gameover.current,
    );
  }

  stop() {
    this.startBtn.dataset.phase = START;
    this.startBtn.innerText = START;
    this.controllers.show();
    this.field.compare.abort();
    this.timer.clear();
    this.timer.hide();
    this.field.freezeAll();
    this.congratulationRemove();
  }

  winCheck() {
    this.cellsLeft = this.field.allCells.filter((cell) => cell.dataset.state === OPENED);
    if (this.cellsLeft.length === this.field.allCells.length) {
      this.timer.clear();
      this.timer.hide();
      this.field.removeField();
      this.field.domLocation.classList.add('hidden');

      [this.congratulation] = Utility.selectElementsByClasses('congratulation');
      const img = Utility.createElement('img', 'winImage');
      img.src = congratulationsImg;
      this.congratulation.appendChild(img);
    }
  }

  congratulationRemove() {
    if (this.congratulation.children && this.congratulation.children.item(0)) {
      this.congratulation.children.item(0).remove();
    }
  }

  saveSettings() {
    localStorage.setItem('FindThePair', JSON.stringify({
      fraction: this.controllers.fraction.current,
      preview: this.controllers.preview.current,
      gameover: this.controllers.gameover.current,
    }));
  }

  readSettings() {
    const storageData = localStorage.getItem('FindThePair');
    const object = JSON.parse(storageData);
    this.settings.fraction.default = object.fraction;
    this.settings.preview.default = object.preview;
    this.settings.gameover.default = object.gameover;
  }
}

export default Game;
