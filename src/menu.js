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

// import Field from './alternativeGame/Field';

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
  // const startGameHandler = () => {
  //   timeStamp = gameOverTimeOut(settings.gameOver, fieldContainer);
  //   const gameField = new Field(fieldContainer, settings, timeStamp);
  //   console.log(gameField.fieldSizes.little);
  //   transformMenu();
  // };

  const playAgainHandler = () => {
    mainContainer.remove();
    initMenu(defaultSettings, placeForApp);
    clearTimeout(timeStamp);
  };
  // constructing menu
  const selectBtns = getElements('select-btn', timeSelectHandler);
  const difficultyInfo = getElements('difficulty-info', null);
  const difficultyBtns = getElements('difficulty-btns', difficultyHandler);
  const playAgainBtn = getElements('play-again', playAgainHandler);
  const startBtn = getElements('start', startGameHandler);

  blockGenerator(
    menuContainer,
    selectBtns,
    difficultyBtns.concat(difficultyInfo),
    playAgainBtn.concat(startBtn),
  );
}

export default initMenu;
