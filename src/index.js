import './style.scss';
import mainContainer from './mainContainer';
import btnGenerator from './btnGenerator';
import getBtnArray from './getBtnArray';
import difficulty from './difficultyBtns';

const btnArray = getBtnArray(difficulty);
btnGenerator(btnArray, mainContainer);
