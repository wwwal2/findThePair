import createField from './createField';
import gamePictures from './gamePictures';
import mainContainer from './mainContainer';
import {
  preview,
  disableStartBtns,
  fieldSize,
  gameEnd,
} from './gameOptions';

const gameConstruction = (difficulty, fadeTime, totalTime) => {
  createField(fieldSize[difficulty], gamePictures(fieldSize[difficulty]), mainContainer);
  preview(fadeTime);
  disableStartBtns();
  gameEnd(totalTime);
};

export default gameConstruction;
