import './style.scss';
import createGameSpace from './coreFunctions/createGameSpace';

import btnGenerator from './blockCreators/simpleBlockCreator';
import advancetBlockCreator from './blockCreators/advancedBlockCreator';

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

import openImgHandler from './coreFunctions/openImgHandler';

function initGame(defaultSettings, placeForApp) {
  // create the game space
  const { mainContainer, menuContainer, fieldContainer } = createGameSpace(placeForApp);

  // default presettings
  const settings = defaultSettings;
  let previewTimer;
  let gameOverTimer;

  // main game handlers
  const timeHandler = (event) => {
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
    gameOverTimer = gameOverTimeOut(settings.gameOver);
    transformMenu();
  };

  const playAagainHandler = () => {
    clearTimeout(previewTimer);
    clearTimeout(gameOverTimer);
    mainContainer.remove();
    initGame(defaultSettings, placeForApp);
  };
  // constructing the app
  const selectBtns = getElements('select-btn', timeHandler);
  advancetBlockCreator(selectBtns, menuContainer, 'select-container');

  const difficultyBtns = getElements('difficulty-btns', difficultyHandler);
  btnGenerator(difficultyBtns, menuContainer, 'difficulty-container');

  const playAgainBtn = getElements('play-again', playAagainHandler);
  const startBtn = getElements('start', startGameHandler);
  btnGenerator(playAgainBtn.concat(startBtn), menuContainer, 'start-container');

  const timeUp = getElements('remove', null);
  btnGenerator(timeUp, menuContainer, 'timeUp');
}

export default initGame;
