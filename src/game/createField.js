import createElement from '../utility/createElement';

const createField = (stickTo, field, gameAction) => {
  for (let i = 0; i < field[0]; i += 1) {
    const row = createElement('div', 'rows', stickTo);

    for (let j = 0; j < field[1]; j += 1) {
      const button = createElement('button', 'field-btns', row);
      button.dataset.x = i;
      button.dataset.y = j;
      button.onclick = gameAction;
    }
  }
};

export default createField;
