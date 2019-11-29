// import createElement from '../utility/createElement';
// import gameAction from './gameAction';
import fieldSizes from './fieldSizes';
import getRandomValues from './getRandomValues';
import createField from './createField';
import generateTableOfMatches from './generateToM';
import createImage from './createImage';
import compare from './compare';

const initGame = (stickTo, settings) => {
  const field = fieldSizes[settings.difficulty];
  const randomValues = getRandomValues(field);
  const tableOfMatches = generateTableOfMatches(field, randomValues);

  const gameAction = (event) => {
    const eData = event.target.dataset;
    createImage(event.target, tableOfMatches, eData.x, eData.y);
    compare(event.target);
  };

  createField(stickTo, field, gameAction);
};

export default initGame;
