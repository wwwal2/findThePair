import Utility from './alternativeGame/Utility';
import Controller from './alternativeGame/Controller';
import Structure from './alternativeGame/Structure';

const initGame = (settings) => {
  const height = new Controller(Utility.selectElements('height-controller'), { default: settings.height, max: 6, min: 3});
  const width = new Controller(Utility.selectElements('width-controller'), { default: settings.width, max: 6, min: 3 });
  const preview = new Controller(Utility.selectElements('preview-controller'), { default: settings.preview, max: 7, min: 1 });
  const gameOver = new Controller(Utility.selectElements('gameOver-controller'), { default: settings.gameOver, max: 10, min: 1 });

  // const start = new Start(playerSettings);
  const start = () => {
    const playerSettings = {
      height: height.value.innerText,
      width: width.value.innerText,
      preview: preview.value.innerText,
      gameOver: gameOver.value.innerText,
    };

    const structure = new Structure();
    structure.Build(playerSettings);
    const tableOfmathes = structure.table;
  };

  const startBtn = Utility.selectElements('start')[0];
  startBtn.onclick = start;
};

export default initGame;
