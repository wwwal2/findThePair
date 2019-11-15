import action from './actionBtn';

const fieldContainer = document.createElement('div');
fieldContainer.className = 'fieldContainer';

const createField = (fieldSize, iconsArray, stickTo) => {
  for (let i = 0; i < fieldSize[0]; i += 1) {
    const row = document.createElement('div');
    row.className = `${i}row`;
    fieldContainer.appendChild(row);

    for (let j = 0; j < fieldSize[1]; j += 1) {
      const image = document.createElement('img');
      image.src = `../img/${iconsArray.pop()}.png`;
      const imageAlt = Object.assign(image.src);
      image.alt = imageAlt.substring(imageAlt.length - 5);

      const button = document.createElement('button');
      button.onclick = action;
      button.dataset.name = image.alt;

      row.appendChild(button);
      button.appendChild(image);
    }
  }
  stickTo.appendChild(fieldContainer);
};

export default createField;
