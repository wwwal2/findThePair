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

  const controllers = [
    new Controller('height-controller', { default: gameStatus.settings.height, max: 6, min: 3 }),
    new Controller('width-controller', { default: gameStatus.settings.width, max: 6, min: 3 }),
    new Controller('preview-controller', { default: gameStatus.settings.preview, max: 7, min: 1 }),
    new Controller('gameOver-controller', { default: gameStatus.settings.gameOver, max: 10, min: 1 }),
  ];

  const clickImage = (event) => {
    const num = gameStatus.tableOfmatches[event.target.dataset.x - 1][event.target.dataset.y - 1];
    compare.match(event, num);
  };

  const start = () => {
    const playerSettings = {
      height: controllers[0].value.innerText,
      width: controllers[1].value.innerText,
      preview: controllers[2].value.innerText,
      gameOver: controllers[3].value.innerText,
    };

    structure.Build(playerSettings);
    Utility.addEvent(clickImage, 'cells');
    gameStatus.tableOfmatches = structure.table;
  };

  Utility.addEvent(start, 'start');
};

export default initGame;
