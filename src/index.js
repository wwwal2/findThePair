import { createField } from './createField';
import { shuffledArray } from "./buttonsSymbols";

const simpleField = [4, 4];
const mediumField = [5, 5];
const largeField = [6, 6];

createField(largeField);
console.log(shuffledArray(largeField));
