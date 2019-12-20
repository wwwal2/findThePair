import Field from './refactor/Field';
import Utility from './refactor/Utility';
import Compare from './refactor/Compare';
import Timer from './refactor/Timer';
import ControllerManager from './refactor/ControllerManager';

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
    this.field = new Field();
    this.compare = new Compare();
    this.timer = new Timer();

    this.startBtn = {};
  }

  run() {
    this.controllers.addAll(this.settings);
    // console.log(this.controllers)
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
      // console.log(this.field.tableOfmatches);
      // this.timer.start();
    } else {
      this.firstPhase();

      // this.field.progress();
      // this.timer.abort();
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
}



//   const gameStatus = {
//     settings,
//     tableOfmatches: 'empty',
//     gameoverTimeout: 'empty',
//   };

//   const [startDOMelement] = Utility.selectElements('start');

//   const controllers = new ControllerManager();
//   controllers.add('height', 'height-controller', { standard: gameStatus.settings.height, max: 6, min: 2 });
//   controllers.add('width', 'width-controller', { standard: gameStatus.settings.width, max: 6, min: 2 });
//   controllers.add('preview', 'preview-controller', { standard: gameStatus.settings.preview, max: 7, min: 1 });
//   controllers.add('gameOver', 'gameOver-controller', { standard: gameStatus.settings.gameOver, max: 15, min: 1 });

//   const field = new Field();
//   const compare = new Compare();
//   const timer = new Timer();

//   const clickImage = (event) => {
//     const num = gameStatus.tableOfmatches[event.target.dataset.x][event.target.dataset.y];
//     compare.match(event, num);
//     field.congratulations(timer.timerId);
//   };

//   const start = () => {
//     if (startDOMelement.innerText === 'start') {
//       startDOMelement.innerText = 'play again';
//       timer.clear(field.previewTimeout);
//       field.removeField();
//       compare.bufferElement = 0;
//       compare.counter = 0;

//       field.build(controllers.settings);
//       field.preview(controllers.preview.value.innerText, () => {
//         timer.start(controllers.gameOver.value.innerText);
//       });
//       gameStatus.tableOfmatches = field.tableOfmatches;
//       Utility.addEvent(clickImage, 'cells');

//       controllers.display('hide');
//     } else {
//       controllers.display('show');
//       startDOMelement.innerText = 'start';
//       timer.clear(field.previewTimeout, compare.openImgTimeout);
//       timer.timerValue.innerText = '';
//       if (field.previewAbort) {
//         field.removeAllImages();
//       }
//       Utility.switchProperty('disabled', true, ...field.allCells);
//       compare.abort();
//       if (timer.timerValue.classList) {
//         timer.timerValue.classList.remove('gameOver');
//         timer.timerLabel.classList.add('hidden');
//       }
//     }
//   };

//   startDOMelement.onclick = start;
// };

export default Game;
