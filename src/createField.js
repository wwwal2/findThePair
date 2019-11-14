const container = document.createElement('div');
container.class = 'container';
document.body.appendChild(container);

const createField = (fieldSize, iconsArray) => {
  for (let i = 0; i < fieldSize[0]; i += 1) {
    const row = document.createElement('div');
    row.className = `${i}row`;
    container.appendChild(row);

    for (let j = 0; j < fieldSize[1]; j += 1) {
      const button = document.createElement('button');
      const image = document.createElement('img');
      image.src = `../img/${iconsArray.pop()}.png`;
      image.alt = 'image';

      row.appendChild(button);
      button.appendChild(image);
    }
  }
};

export default createField;
