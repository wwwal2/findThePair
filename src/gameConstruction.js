import createField from './createField';
import gamePictures from './gamePictures';
import { mainContainer } from './gameContainers';
import {
  preview,
  disableStartBtns,
  fieldSize,
  gameEnd,
} from './gameGenerationOptions';

const gameConstruction = (difficulty, fadeTime, totalTime) => {
  createField(fieldSize[difficulty], gamePictures(fieldSize[difficulty]), mainContainer);
  preview(fadeTime);
  disableStartBtns();
  gameEnd(totalTime);
};

export default gameConstruction;
