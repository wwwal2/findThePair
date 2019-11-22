import './style.scss';
import createGameSpace from './coreFunctions/createGameSpace';

import btnGenerator from './blockCreators/simpleBlockCreator';
import advancetBlockCreator from './blockCreators/advancedBlockCreator';

import getElements from './elementsData';

import createField from './coreFunctions/createField';
import gamePictures from './coreFunctions/gamePictures';
import {
  hideTimeOut,
  disableStartBtns,
  fieldSize,
  gameOverTimeOut,
} from './autoActions';

import openImgHandler from './coreFunctions/openImgHandler';

function initGame(defaultSettings, placeForApp) {
  // create the game space
  const { menuContainer, fieldContainer } = createGameSpace(placeForApp);

  // default presettings
  const settings = defaultSettings;

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
  };

  const startGame = () => {
    const getPicturesNames = gamePictures(fieldSize[settings.difficulty]);
    const getFieldSize = fieldSize[settings.difficulty];

    createField(
      getFieldSize,
      getPicturesNames,
      fieldContainer,
      openImgHandler,
    );

    hideTimeOut(settings.preview);
    gameOverTimeOut(settings.gameOver);
    disableStartBtns();
  };

  // constructing the app
  const selectBtns = getElements(timeHandler, 'select-btn');
  advancetBlockCreator(selectBtns, menuContainer);

  const difficultyBtns = getElements(difficultyHandler, 'difficulty-btns');
  btnGenerator(difficultyBtns, menuContainer, 'difficulty-btns');

  const startBtn = getElements(startGame, 'start');
  btnGenerator(startBtn, menuContainer, 'start-container');

  const timeUp = getElements(null, 'remove');
  btnGenerator(timeUp, menuContainer, 'timeUp');

}

export default initGame;
