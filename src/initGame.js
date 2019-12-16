import Structure from './game/Structure';
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
  controllers.add('gameOver', 'gameOver-controller', { standard: gameStatus.settings.gameOver, max: 10, min: 1 });
  controllers.validation('width', controllers.width.value.innerText);

  const structure = new Structure();
  const compare = new Compare();
  const timer = new Timer();

  const clickImage = (event) => {
    const num = gameStatus.tableOfmatches[event.target.dataset.x][event.target.dataset.y];
    compare.match(event, num);
    structure.congratulations(timer.timerId);
  };

  const start = () => {
    if (startDOMelement.innerText === 'start') {
      startDOMelement.innerText = 'play again';
      timer.clear();
      structure.remove();

      const playerSettings = {
        height: controllers.height.value.innerText,
        width: controllers.width.value.innerText,
        preview: controllers.preview.value.innerText,
        gameOver: controllers.gameOver.value.innerText,
      };
      structure.build(playerSettings);
      structure.preview(controllers.preview.value.innerText, () => {
        timer.start(controllers.gameOver.value.innerText);
      });
      gameStatus.tableOfmatches = structure.tableOfmatches;
      Utility.addEvent(clickImage, 'cells');

      controllers.display('hide', controllers);
    } else {
      controllers.display('show', controllers);
      startDOMelement.innerText = 'start';
      Utility.switchProperty('disabled', true, ...structure.allCells);
      timer.clear();
      timer.timerValue.classList.remove('gameOver');
      timer.timerValue.innerText = '';
    }
  };

  startDOMelement.onclick = start;
};

export default initGame;
