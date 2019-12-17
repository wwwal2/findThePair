import Field from './game/Field';
import Utility from './game/Utility';
import Compare from './game/Compare';
import Timer from './game/Timer';
import ControllerManager from './game/ControllerManager';

const initGame = (settings) => {
  const gameStatus = {
    settings,
    tableOfmatches: 'empty',
    gameoverTimeout: 'empty',
  };

  const [startDOMelement] = Utility.selectElements('start');

  const controllers = new ControllerManager();
  controllers.add('height', 'height-controller', { standard: gameStatus.settings.height, max: 6, min: 2 });
  controllers.add('width', 'width-controller', { standard: gameStatus.settings.width, max: 6, min: 2 });
  controllers.add('preview', 'preview-controller', { standard: gameStatus.settings.preview, max: 7, min: 1 });
  controllers.add('gameOver', 'gameOver-controller', { standard: gameStatus.settings.gameOver, max: 15, min: 1 });
  controllers.validation('width', controllers.width.value.innerText);

  const field = new Field();
  const compare = new Compare();
  const timer = new Timer();

  const clickImage = (event) => {
    const num = gameStatus.tableOfmatches[event.target.dataset.x][event.target.dataset.y];
    compare.match(event, num);
    field.congratulations(timer.timerId);
  };

  const start = () => {
    if (startDOMelement.innerText === 'start') {
      startDOMelement.innerText = 'play again';
      timer.clear(field.previewTimeout);
      field.removeField();
      compare.bufferElement = 0;
      compare.counter = 0;

      field.build(controllers.settings);
      field.preview(controllers.preview.value.innerText, () => {
        timer.start(controllers.gameOver.value.innerText);
      });
      gameStatus.tableOfmatches = field.tableOfmatches;
      Utility.addEvent(clickImage, 'cells');

      controllers.display('hide');
    } else {
      controllers.display('show');
      startDOMelement.innerText = 'start';
      debugger
      Utility.switchProperty('disabled', true, ...field.allCells);
      timer.clear(field.previewTimeout, compare.openImgTimeout);
      timer.timerValue.innerText = '';
      if (field.previewAbort) {
        field.removeAllImages();
      }
      compare.abort();
      if (timer.timerValue.classList) {
        timer.timerValue.classList.remove('gameOver');
        timer.timerLabel.classList.add('hidden');
      }
    }
  };

  startDOMelement.onclick = start;
};

export default initGame;
