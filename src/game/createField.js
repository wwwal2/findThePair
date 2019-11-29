import createElement from '../utility/createElement';
import createImage from './createImage';

const createField = (stickTo, field, gameAction, tableOfMatches) => {
  for (let i = 0; i < field[0]; i += 1) {
    const row = createElement('div', 'rows', stickTo);

    for (let j = 0; j < field[1]; j += 1) {
      const button = createElement('button', 'field-btns', row);
      button.dataset.x = i;
      button.dataset.y = j;
      button.onclick = gameAction;
      button.disabled = true;
      createImage(button, tableOfMatches, i, j);
    }
  }
};

export default createField;
