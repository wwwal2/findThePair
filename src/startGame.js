import createField from './createField';
import shuffledPictures from './gamePictures';
import mainContainer from './mainContainer';
import { fadePic, disableStartBtns } from './gameOptions';

const easyField = [4, 4];
const mediumField = [5, 5];
const hardField = [6, 6];

const difficultyFunc = (event) => {
  switch (event.target.textContent) {
    case 'Easy':
      createField(easyField, shuffledPictures(easyField), mainContainer);
      fadePic(5000);
      disableStartBtns();
      break;
    case 'Medium':
      createField(mediumField, shuffledPictures(mediumField), mainContainer);
      fadePic(4000);
      disableStartBtns();
      break;
    case 'Hard':
      createField(hardField, shuffledPictures(hardField), mainContainer);
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

export default difficultyFunc;
