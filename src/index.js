import './style.scss';
import mainContainer from './mainContainer';
import createField from './createField';
import shuffledArray from './gamePictures';
import { btnGenerator, btnArray } from './btnGenerator';

// const simpleField = [4, 4];
const mediumField = [5, 5];
// const largeField = [6, 6];
btnGenerator(btnArray, mainContainer);
createField(mediumField, shuffledArray(mediumField), mainContainer);


// console.log(shuffledArray(simpleField));
