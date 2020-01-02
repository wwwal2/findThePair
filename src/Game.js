import Field from './game/Field';
import Utility from './game/Utility';
import Timer from './game/Timer';
import ControllerManager from './game/ControllerManager';
import congratulationsImg from './img/congratulations.png';
import { START, STOP, OPENED } from './game/constants';

class Game {
  constructor(settings) {
    this.settings = settings;

    this.field = new Field(() => this.winCheck());

    this.controllers = new ControllerManager(
      () => this.saveSettings(),
      (fraction) => this.field.build(fraction),
      () => this.field.removeField(),
    );

    this.timer = new Timer();

    this.startClass = START;
    this.startBtn = {};
    this.cellsLeft = [];
    this.congratulation = {};
  }

  run() {
    if (localStorage.getItem('FindThePairGrid')) {
      this.readSettings();
    }

    this.controllers.addAll(this.settings);
    this.field.build(this.controllers.fraction.current);

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
    this.field.showAll();

    this.timer.preview(this.controllers.preview.current)
      .then(() => {
        this.field.hideAll();
        return this.timer.gameover(this.controllers.gameover.current);
      }).then(() => {
        this.field.freezeAll();
      });
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
      this.field.build(this.controllers.fraction.current);
    }
  }

  saveSettings() {
    localStorage.setItem('FindThePairGrid', JSON.stringify({
      fraction: this.controllers.fraction.current,
      preview: this.controllers.preview.current,
      gameover: this.controllers.gameover.current,
    }));
  }

  readSettings() {
    const storageData = localStorage.getItem('FindThePairGrid');
    const object = JSON.parse(storageData);
    this.settings.fraction.default = object.fraction;
    this.settings.preview.default = object.preview;
    this.settings.gameover.default = object.gameover;
  }
}

export default Game;
