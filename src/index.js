import './style.scss';
import mainContainer from './mainContainer';
import btnGenerator from './btnGenerator';
import getDifficultyBtns from './getDufficultyBtns';
import startGame from './startGame';

const generateGame = getDifficultyBtns(startGame);
btnGenerator(generateGame, mainContainer);
