import './style.scss';
import createContainer from './getMainContainer';
import btnGenerator from './generators/btnGenerator';
import getMenuBtns from './objectsData/menuBtns';
import gameConstruction from './coreFunctions/gameConstruction';
import getSelectBtns from './objectsData/selectBtns';
import selectGenerator from './generators/selectGenerator';
import {
  setPreview,
  setGameTime,
  setDifficulty,
} from './preGameSettings';

// create the game space
const { mainContainer, menuContainer } = createContainer(document.body);

// default presettings
const preGameSettings = {
  preview: 3000,
  time: 60000,
  difficulty: 'medium',
};

// main game prefferences
const previewTime = (event) => {
  preGameSettings.preview = setPreview(event);
};
const gameTime = (event) => {
  preGameSettings.time = setGameTime(event);
};
const difficultySet = (event) => {
  preGameSettings.difficulty = setDifficulty(event);
};
const startGame = () => {
  gameConstruction(
    preGameSettings.difficulty,
    preGameSettings.preview,
    preGameSettings.time,
    mainContainer,
  );
};

// constructing menu
const selectOne = getSelectBtns(previewTime, 'preview');
const selectTwo = getSelectBtns(gameTime, 'gameTime');
selectGenerator(selectOne.concat(selectTwo), menuContainer);

const difficultyBtns = getMenuBtns(difficultySet, 'difficultyBtns');
btnGenerator(difficultyBtns, menuContainer, 'difficultyBtns');

const startbtn = getMenuBtns(startGame, 'start');
btnGenerator(startbtn, menuContainer, 'startContainer');
