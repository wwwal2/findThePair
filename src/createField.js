const fieldContainer = document.createElement('div');
fieldContainer.class = 'fieldContainer';

const createField = (fieldSize, iconsArray, stickTo) => {
  for (let i = 0; i < fieldSize[0]; i += 1) {
    const row = document.createElement('div');
    row.className = `${i}row`;
    fieldContainer.appendChild(row);

    for (let j = 0; j < fieldSize[1]; j += 1) {
      const button = document.createElement('button');
      const image = document.createElement('img');
      image.src = `../img/${iconsArray.pop()}.png`;
      const imageAlt = Object.assign(image.src);
      image.alt = imageAlt.substring(imageAlt.length - 5);

      row.appendChild(button);
      button.appendChild(image);
    }
  }
  stickTo.appendChild(fieldContainer);
};

export default createField;
