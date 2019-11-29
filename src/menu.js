import './style.scss';
import createGameSpace from './createGameSpace';

import getElements from './elementsData';

import createField from './coreFunctions/createField';
import gamePictures from './coreFunctions/gamePictures';
import {
  hideTimeOut,
  transformMenu,
  fieldSize,
  gameOverTimeOut,
  clearHighlight,
} from './autoActions';

import { openImgHandler, passTimestamp } from './coreFunctions/openImgHandler';

import blockGenerator from './blockGenerator';

import initGame from './game/game';
import getRandomValues from './game/getRandomValues';

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
    // const getFieldSize = fieldSize[settings.difficulty];
    // const getPicturesNames = gamePictures(getFieldSize);

    // createField(
    //   getFieldSize,
    //   getPicturesNames,
    //   fieldContainer,
    //   openImgHandler,
    // );

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
    initGame(defaultSettings, placeForApp);
  };
  // constructing menu
  const selectBtns = getElements('select-btn', timeSelectHandler);
  const difficultyBtns = getElements('difficulty-btns', difficultyHandler);
  const playAgainBtn = getElements('play-again', playAagainHandler);
  const startBtn = getElements('start', startGameHandler);

  blockGenerator(menuContainer, selectBtns, difficultyBtns, playAgainBtn.concat(startBtn));
}

export default initMenu;
