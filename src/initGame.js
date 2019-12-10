import ControllerFactory from './game/ControllerFactory';
import Structure from './game/Structure';
import Utility from './game/Utility';
import Compare from './game/Compare';
import Timer from './game/Timer';

const initGame = (settings) => {
  const gameStatus = {
    settings,
    tableOfmatches: 'empty',
    gameoverTimeout: 'empty',
  };

  const structure = new Structure();
  const compare = new Compare();
  const factory = new ControllerFactory();
  const timer = new Timer();

  const controllers = {
    height: factory.create('height-controller', { default: gameStatus.settings.height, max: 6, min: 3 }),
    width: factory.create('width-controller', { default: gameStatus.settings.width, max: 6, min: 3 }),
    preview: factory.create('preview-controller', { default: gameStatus.settings.preview, max: 7, min: 1 }),
    gameOver: factory.create('gameOver-controller', { default: gameStatus.settings.gameOver, max: 10, min: 1 }),
  };

  const clickImage = (event) => {
    const num = gameStatus.tableOfmatches[event.target.dataset.x - 1][event.target.dataset.y - 1];
    compare.match(event, num);
  };

  const start = () => {
    const playerSettings = {
      height: controllers.height.value.innerText,
      width: controllers.width.value.innerText,
      preview: controllers.preview.value.innerText,
      gameOver: controllers.gameOver.value.innerText,
    };
    timer.clear();
    timer.start(controllers.gameOver.value.innerText);
    structure.Build(playerSettings);
    Utility.addEvent(clickImage, 'cells');
    gameStatus.tableOfmatches = structure.table;
  };

  Utility.addEvent(start, 'start');
};

export default initGame;
