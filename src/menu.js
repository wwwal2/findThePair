import './style.scss';
import createGameSpace from './createGameSpace';
import getElements from './elementsData';
import {
  transformMenu,
  gameOverTimeOut,
  clearHighlight,
} from './autoActions';
import blockGenerator from './blockGenerator';
import initGame from './game/game';

function initMenu(defaultSettings, placeForApp) {
  // create the game space
  const { mainContainer, menuContainer, fieldContainer } = createGameSpace(placeForApp);

  // default presettings
  const settings = defaultSettings;
  let timeStamp;
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
    event.target.classList.add('highlight');
  };

  const startGameHandler = () => {
    timeStamp = gameOverTimeOut(settings.gameOver, fieldContainer);
    initGame(fieldContainer, settings, timeStamp);
    transformMenu();
  };

  const playAagainHandler = () => {
    mainContainer.remove();
    initMenu(defaultSettings, placeForApp);
    clearTimeout(timeStamp);
  };
  // constructing menu
  const selectInfo = getElements('select-info', null);
  const selectBtns = getElements('select-btn', timeSelectHandler);
  const difficultyInfo = getElements('difficulty-info', null);
  const difficultyBtns = getElements('difficulty-btns', difficultyHandler);
  const playAgainBtn = getElements('play-again', playAagainHandler);
  const startBtn = getElements('start', startGameHandler);

  blockGenerator(
    menuContainer,
    selectBtns.concat(selectInfo),
    difficultyBtns.concat(difficultyInfo),
    playAgainBtn.concat(startBtn),
  );
}

export default initMenu;
