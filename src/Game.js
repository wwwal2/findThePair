import Field from './game/Field';
import Utility from './game/Utility';
import Timer from './game/Timer';
import ControllerManager from './game/ControllerManager';
import congratulationsImg from './img/congratulations.png';

const START = 'start';
const STOP = 'Play again';

class Game {
  constructor(settings) {
    this.settings = settings;

    this.controllers = new ControllerManager();

    this.field = new Field(() => this.winCheck());
    this.timer = new Timer(
      () => this.field.showAll(),
      () => this.field.hideAll(),
      () => this.field.disableAll(),
    );

    this.startClass = START;
    this.startBtn = {};
    this.cellsLeft = [];
    this.congratulation = {};
  }

  run() {
    if (document.cookie) {
      this.readCookies();
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
    this.saveCookies();
    this.startBtn.dataset.phase = STOP;
    this.startBtn.innerText = STOP;
    this.controllers.hide();
    this.field.removeField();

    this.field.build(this.controllers.height.current, this.controllers.width.current);

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
    this.congratulationRemove();
  }

  winCheck() {
    this.cellsLeft = this.field.allCells.filter((cell) => cell.childElementCount === 1);
    if (this.cellsLeft.length === this.field.allCells.length) {
      this.timer.clear();
      this.field.removeField();

      [this.congratulation] = Utility.selectElementsByClasses('congratulation');
      const img = Utility.createElement('img', 'winImage');
      img.src = congratulationsImg;
      this.congratulation.appendChild(img);
    }
  }

  congratulationRemove() {
    if (this.congratulation.children) {
      this.congratulation.children.item(0).remove();
    }
  }

  saveCookies() {
    document.cookie = `Find the pair =${JSON.stringify({
      height: this.controllers.height.current,
      width: this.controllers.width.current,
      preview: this.controllers.preview.current,
      gameover: this.controllers.gameover.current,
    })}`;
  }

  readCookies() {
    const cleanCookies = document.cookie.replace('Find the pair=', '');
    const object = (JSON.parse(cleanCookies));
    this.settings.height.default = object.height;
    this.settings.width.default = object.width;
    this.settings.preview.default = object.preview;
    this.settings.gameover.default = object.gameover;
  }
}

export default Game;
