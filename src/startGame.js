import createField from './createField';
import gamePictures from './gamePictures';
import mainContainer from './mainContainer';
import { fadePic, disableStartBtns } from './gameOptions';

const easyField = [4, 4];
const mediumField = [5, 5];
const hardField = [6, 6];

const startGame = (event) => {
  switch (event.target.textContent) {
    case 'Easy':
      createField(easyField, gamePictures(easyField), mainContainer);
      fadePic(3000);
      disableStartBtns();
      break;
    case 'Medium':
      createField(mediumField, gamePictures(mediumField), mainContainer);
      fadePic(3000);
      disableStartBtns();
      break;
    case 'Hard':
      createField(hardField, gamePictures(hardField), mainContainer);
      fadePic(3000);
      disableStartBtns();
      break;
    case 'Play again':
      window.location.reload();
      break;
    default:
      break;
  }
};

export default startGame;
