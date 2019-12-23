import Field from './game/Field';
import Utility from './game/Utility';
import Timer from './game/Timer';
import ControllerManager from './game/ControllerManager';
import congratulations from './img/congratulations.png';

class Game {
  constructor(settings = {
    height: { default: 6, min: 2, max: 6 },
    width: { default: 6, min: 2, max: 6 },
    preview: { default: 4, min: 1, max: 7 },
    gameover: { default: 3, min: 1, max: 15 },
  }) {
    this.settings = settings;

    this.controllers = new ControllerManager();

    this.field = new Field(() => this.winCheck());
    this.timer = new Timer();

    this.startClass = 'start';
    this.startBtn = {};
    this.cellsLeft = [];
  }

  run() {
    if (document.cookie) {
      this.readCookies();
    }

    this.controllers.addAll(this.settings);

    [this.startBtn] = Utility.selectElementsByClasses(this.startClass);
    this.startBtn.dataset.phase = 'start';

    this.startBtn.onclick = () => {
      this.clickStart();
    };
  }

  clickStart() {
    if (this.startBtn.dataset.phase === 'start') {
      this.start();
    } else {
      this.stop();
    }
  }

  start() {
    this.saveCookies();
    this.startBtn.dataset.phase = 'stop';
    this.startBtn.innerText = 'Play again';
    this.controllers.hide();
    this.field.removeField();

    this.field.build(this.controllers.height.current, this.controllers.width.current);

    this.field.showAll();

    this.timer.preview(this.controllers.preview.current)
      .then(() => {
        this.field.hideAll();
        return this.timer.start(this.controllers.gameover.current);
      }).then(() => {
        this.field.disableAll();
      });
  }

  stop() {
    this.startBtn.dataset.phase = 'start';
    this.startBtn.innerText = 'start';
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
      img.src = congratulations;
      img.style.backgroundColor = 'transparent';
      this.field.domLocation.appendChild(img);
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
