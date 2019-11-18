import action from './actionBtn';

const fieldContainer = document.createElement('div');
fieldContainer.className = 'fieldContainer';

const rowTemplate = () => {
  const row = document.createElement('div');
  row.className = 'rows';
  fieldContainer.appendChild(row);
  return row;
};

const btnTemplate = () => {
  const btn = document.createElement('button');
  btn.className = 'gameBtns';
  btn.addEventListener('click', action, true);
  return btn;
};

const imgTemplate = (icons, uniqueI, uniqJ) => {
  const image = document.createElement('img');
  image.src = `../img/${icons.pop()}.png`;
  const imageAlt = Object.assign(image.src);
  image.alt = imageAlt.substring(imageAlt.length - 6);
  image.dataset.name = image.alt;
  image.dataset.uniqueId = `${uniqueI} ${uniqJ}`;
  return image;
};


const createField = (fieldSize, iconsArray, stickTo) => {
  for (let i = 0; i < fieldSize[0]; i += 1) {
    const row = rowTemplate();

    for (let j = 0; j < fieldSize[1]; j += 1) {
      const button = btnTemplate();
      const image = imgTemplate(iconsArray, i, j);
      row.appendChild(button);
      button.appendChild(image);
    }
  }
  stickTo.appendChild(fieldContainer);
};

export default createField;
