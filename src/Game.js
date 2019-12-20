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
    this.startClass = 'start';

    this.controllers = new ControllerManager();

    this.field = new Field(() => this.winCheck());
    this.timer = new Timer();

    this.startBtn = {};
    this.cellsLeft = [];
  }

  run() {
    this.controllers.addAll(this.settings);

    [this.startBtn] = Utility.selectElementsByClasses(this.startClass);
    this.startBtn.dataset.phase = 'first';

    this.startBtn.onclick = () => {
      this.clickStart();
    };
  }

  clickStart() {
    if (this.startBtn.dataset.phase === 'first') {
      this.secondPhase();
      this.field.removeField();

      this.field.build(this.controllers.height.current, this.controllers.width.current);

      this.timer.preview(
        this.controllers.preview.current,
        this.field.tableOfmatches,
        () => this.timer.start(this.controllers.gameover.current),
      );
    } else {
      this.firstPhase();
      this.field.compare.abort();
      this.timer.clear();
    }
  }

  firstPhase() {
    this.startBtn.dataset.phase = 'first';
    this.startBtn.innerText = 'start';
    this.controllers.display();
  }

  secondPhase() {
    this.startBtn.dataset.phase = 'second';
    this.startBtn.innerText = 'Play again';
    this.controllers.display('none');
  }

  winCheck() {
    this.cellsLeft = this.timer.allCells.filter((cell) => cell.childElementCount === 1);
    if (this.cellsLeft.length === this.timer.allCells.length) {
      this.timer.clear();
      this.field.removeField();

      const img = Utility.createElement('img', 'congratulation');
      img.src = congratulations;
      img.style.backgroundColor = 'transparent';
      this.field.domLocation.appendChild(img);
    }
  }
}

export default Game;
