import './style.scss';
import mainContainer from './gameContainers';
import btnGenerator from './btnGenerator';
import getDifficultyBtns from './getDufficultyBtns';
import gameConstruction from './gameConstruction';
import {
  setTimers,
  preGameSettings,
  setDifficulty,
} from './preGameSettings';

import selectBtns from './timeBtns/selectBtns';
import selectGenerator from './timeBtns/selectGenerator';

// main game events
const timeSet = (event) => {
  setTimers(event);
};

const difficultySet = (event) => {
  setDifficulty(event);
};

const startGame = () => {
  gameConstruction(
    preGameSettings.difficulty,
    preGameSettings.preview,
    preGameSettings.time,
  );
};

// constructing the app
const selectable = selectBtns(timeSet);
selectGenerator(selectable, mainContainer);

const difficultyBtns = getDifficultyBtns(difficultySet, 'difficultyBtns');
btnGenerator(difficultyBtns, mainContainer, 'difficultyBtns');

const startbtn = getDifficultyBtns(startGame, 'start');
btnGenerator(startbtn, mainContainer, 'startContainer');
