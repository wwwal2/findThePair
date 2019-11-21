import './style.scss';
import { btnContainer } from './gameContainers';
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
selectGenerator(selectable, btnContainer);

const difficultyBtns = getDifficultyBtns(difficultySet, 'difficultyBtns');
btnGenerator(difficultyBtns, btnContainer, 'difficultyBtns');

const startbtn = getDifficultyBtns(startGame, 'start');
btnGenerator(startbtn, btnContainer, 'startContainer');
