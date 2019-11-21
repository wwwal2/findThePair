import createField from './createField';
import gamePictures from '../gamePictures';
import {
  preview,
  disableStartBtns,
  fieldSize,
  gameEnd,
} from '../configureGameEvents';

const gameConstruction = (difficulty, fadeTime, totalTime, stickTo) => {
  createField(fieldSize[difficulty], gamePictures(fieldSize[difficulty]), stickTo);
  preview(fadeTime);
  disableStartBtns();
  gameEnd(totalTime);
};

export default gameConstruction;
