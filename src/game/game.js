import switchProperty from '../utility/switchProperty';
import fieldSizes from './fieldSizes';
import getRandomValues from './getRandomValues';
import createField from './createField';
import generateTableOfMatches from './generateToM';
import createImage from './createImage';
import compare from './compare';
import { increase } from './counter';

const initGame = (stickTo, settings) => {
  const field = fieldSizes[settings.difficulty];
  const randomValues = getRandomValues(field);
  const tableOfMatches = generateTableOfMatches(field, randomValues);

  const gameAction = (event) => {
    const eData = event.target.dataset;
    switchProperty('disabled', true, [event.target]);
    const count = increase();

    if (count < 3) {
      createImage(event.target, tableOfMatches, eData.x, eData.y);
      compare(event.target);
    } else {
      event.target.classList.add('apply-shake');
      setTimeout(() => {
        event.target.classList.remove('apply-shake');
      }, 500);
      switchProperty('disabled', false, [event.target]);
    }
  };

  createField(stickTo, field, gameAction);
};

export default initGame;
