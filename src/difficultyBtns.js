import createField from './createField';
import shuffledPictures from './gamePictures';
import mainContainer from './mainContainer';

const easyField = [4, 4];
const mediumField = [5, 5];
const hardField = [6, 6];

const fade = () => {
  const AllImages = Array.from(document.body.getElementsByTagName('img'));
  setTimeout(() => {
    AllImages.forEach((pic) => {
      pic.className = 'hidden';
    });
  }, 3000);
};

const difficulty = (event) => {
  switch (event.target.textContent) {
    case 'Easy':
      createField(easyField, shuffledPictures(easyField), mainContainer);
      fade();
      break;
    case 'Medium':
      createField(mediumField, shuffledPictures(mediumField), mainContainer);
      fade();
      break;
    case 'Hard':
      createField(hardField, shuffledPictures(hardField), mainContainer);
      fade();
      break;
    case 'Play again':
      window.location.reload();
      break;
    default:
      break;
  }
};

export default difficulty;
