import './style.scss';
import mainContainer from './mainContainer';
import btnGenerator from './btnGenerator';
import getDifficultyBtns from './getDufficultyBtns';
import gameConstruction from './gameConstruction';
import { setTimers, timeSettings } from './timeSettings';

import selectBtns from './timeBtns/selectBtns';
import selectGenerator from './timeBtns/selectGenerator';

// main game events
const timeSet = (event) => {
  setTimers(event);
};

const startGame = (event) => {
  gameConstruction(
    event.target.textContent.toLowerCase(),
    timeSettings.preview,
    timeSettings.time,
  );
};

// constructing the app
const selectable = selectBtns(timeSet);
selectGenerator(selectable, mainContainer);

const difficultyBtns = getDifficultyBtns(startGame);
btnGenerator(difficultyBtns, mainContainer);
