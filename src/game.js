import './style.scss';
import createGameSpace from './coreFunctions/createGameSpace';

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

import assemble from './utility/assemble';

function initGame(defaultSettings, placeForApp) {
  // create the game space
  const { mainContainer, menuContainer, fieldContainer } = createGameSpace(placeForApp);

  // default presettings
  const settings = defaultSettings;
  let previewTimer;
  let gameOverTimer;

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
    const getFieldSize = fieldSize[settings.difficulty];
    const getPicturesNames = gamePictures(getFieldSize);

    createField(
      getFieldSize,
      getPicturesNames,
      fieldContainer,
      openImgHandler,
    );

    previewTimer = hideTimeOut(settings.preview);
    gameOverTimer = gameOverTimeOut(settings.gameOver, menuContainer);
    passTimestamp(gameOverTimer);
    transformMenu();
  };

  const playAagainHandler = () => {
    clearTimeout(previewTimer);
    clearTimeout(gameOverTimer);
    mainContainer.remove();
    initGame(defaultSettings, placeForApp);
  };
  // constructing menu
  const selectBtns = getElements('select-btn', timeSelectHandler);
  const difficultyBtns = getElements('difficulty-btns', difficultyHandler);
  const playAgainBtn = getElements('play-again', playAagainHandler);
  const startBtn = getElements('start', startGameHandler);

  assemble(menuContainer, selectBtns, difficultyBtns, playAgainBtn.concat(startBtn));
}

export default initGame;
