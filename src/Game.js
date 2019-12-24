import Field from './game/Field';
import Utility from './game/Utility';
import Timer from './game/Timer';
import ControllerManager from './game/ControllerManager';
import congratulations from './img/congratulations.png';

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
  }

  winCheck() {
    this.cellsLeft = this.field.allCells.filter((cell) => cell.childElementCount === 1);
    if (this.cellsLeft.length === this.field.allCells.length) {
      this.timer.clear();
      this.field.removeField();

      const img = Utility.createElement('img', 'congratulation');
      const [location] = Utility.selectElementsByClasses('congratulation');
      img.src = congratulations;
      location.appendChild(img);
    }
  }

  saveCookies() {
    document.cookie = JSON.stringify({
      name: 'FIND THE PAIR',
      height: this.controllers.height.current,
      width: this.controllers.width.current,
      preview: this.controllers.preview.current,
      gameover: this.controllers.gameover.current,
    });
  }

  readCookies() {
    const cookies = (JSON.parse(document.cookie));
    this.settings.height.default = cookies.height;
    this.settings.width.default = cookies.width;
    this.settings.preview.default = cookies.preview;
    this.settings.gameover.default = cookies.gameover;
  }
}

export default Game;
