import './style.scss';
import createGameSpace from './createGameSpace';
import getElements from './elementsData';
import {
  hideTimeOut,
  transformMenu,
  gameOverTimeOut,
  clearHighlight,
} from './autoActions';
import { passTimestamp } from './coreFunctions/openImgHandler';
import blockGenerator from './blockGenerator';
import initGame from './game/game';

function initMenu(defaultSettings, placeForApp) {
  // create the game space
  const { mainContainer, menuContainer, fieldContainer } = createGameSpace(placeForApp);

  // default presettings
  const settings = defaultSettings;
  const timeStamps = {
    preview: 0,
    gameOver: 0,
  };
  // main game handlers
  const timeSelectHandler = (event) => {
    if (event.target.value < 60000) {
      settings.preview = event.target.value;
    } else {
      settings.gameOver = event.target.value;
    }
  };

  const difficultyHandler = (event) => {
    settings.difficulty = event.target.innerText.toLowerCase();
    clearHighlight();
    event.target.className = 'highlight';
  };

  const startGameHandler = () => {
    initGame(fieldContainer, settings);
    timeStamps.preview = hideTimeOut(settings.preview);
    timeStamps.gameOver = gameOverTimeOut(settings.gameOver, menuContainer);
    passTimestamp(timeStamps.gameOver);
    transformMenu();
  };

  const playAagainHandler = () => {
    clearTimeout(timeStamps.preview);
    clearTimeout(timeStamps.gameOver);
    mainContainer.remove();
    initMenu(defaultSettings, placeForApp);
  };
  // constructing menu
  const selectBtns = getElements('select-btn', timeSelectHandler);
  const difficultyBtns = getElements('difficulty-btns', difficultyHandler);
  const playAgainBtn = getElements('play-again', playAagainHandler);
  const startBtn = getElements('start', startGameHandler);

  blockGenerator(menuContainer, selectBtns, difficultyBtns, playAgainBtn.concat(startBtn));
}

export default initMenu;
