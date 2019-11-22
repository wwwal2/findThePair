import './style.scss';
import createContainer from './coreFunctions/getMainContainer';
import btnGenerator from './generators/btnGenerator';
import selectGenerator from './generators/selectGenerator';

import getMenuBtns from './objectsData/menuBtns';
import getSelectBtns from './objectsData/selectBtns';
import getOtherElements from './objectsData/otherElements';

import createField from './coreFunctions/createField';
import gamePictures from './coreFunctions/gamePictures';
import {
  show,
  disableStartBtns,
  fieldSize,
  gameEnd,
} from './autoActions';

import action from './coreFunctions/gameAction';

function initGame(defaultSettings) {
  // create the game space
  const { mainContainer, menuContainer } = createContainer(document.body);

  // default presettings
  const preGameSettings = defaultSettings;

  // main game prefferences
  const previewTime = (event) => {
    preGameSettings.preview = event.target.value;
  };
  const gameTime = (event) => {
    preGameSettings.time = event.target.textContent.toLowerCase();
  };
  const difficultySet = (event) => {
    preGameSettings.difficulty = event.target.innerText.toLowerCase();
  };

  const startGame = () => {
    const pictures = gamePictures(fieldSize[preGameSettings.difficulty]);
    createField(
      fieldSize[preGameSettings.difficulty],
      pictures,
      mainContainer,
      action,
    );
    show(preGameSettings.preview);
    gameEnd(preGameSettings.time);
    disableStartBtns();
  };

  // constructing menu
  const selectOne = getSelectBtns(previewTime, 'preview');
  const selectTwo = getSelectBtns(gameTime, 'gameTime');
  selectGenerator(selectOne.concat(selectTwo), menuContainer);

  const difficultyBtns = getMenuBtns(difficultySet, 'difficultyBtns');
  btnGenerator(difficultyBtns, menuContainer, 'difficultyBtns');

  const startbtn = getMenuBtns(startGame, 'start');
  btnGenerator(startbtn, menuContainer, 'startContainer');

  const timeUp = getOtherElements(null, 'remove');
  btnGenerator(timeUp, menuContainer, 'timeUp');

}

export default initGame;
