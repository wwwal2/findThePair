import Controller from './game/Controller';
import Structure from './game/Structure';
import Utility from './game/Utility';
import Compare from './game/Compare';

const initGame = (settings) => {
  const gameStatus = {
    settings,
    tableOfmatches: 'empty',
    gameoverTimeout: 'empty',
  };

  const structure = new Structure();
  const compare = new Compare();
  const controller = new Controller();

  const controllers = [
    controller.create('height-controller', { default: gameStatus.settings.height, max: 6, min: 3 }),
    controller.create('width-controller', { default: gameStatus.settings.width, max: 6, min: 3 }),
    controller.create('preview-controller', { default: gameStatus.settings.preview, max: 7, min: 1 }),
    controller.create('gameOver-controller', { default: gameStatus.settings.gameOver, max: 10, min: 1 }),
  ];

  const clickImage = (event) => {
    const num = gameStatus.tableOfmatches[event.target.dataset.x - 1][event.target.dataset.y - 1];
    compare.match(event, num);
  };

  const start = () => {
    const playerSettings = {
      height: controllers[0],
      width: controllers[1],
      preview: controllers[2],
      gameOver: controllers[3],
    };

    structure.Build(playerSettings);
    Utility.addEvent(clickImage, 'cells');
    gameStatus.tableOfmatches = structure.table;
  };

  Utility.addEvent(start, 'start');
};

export default initGame;
