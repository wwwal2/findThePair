import createElement from './createElement';

const createBtn = (action) => {
  const btn = createElement('button', 'field-btns', null);
  btn.addEventListener('click', action, true);
  return btn;
};

const createImg = (icons, uniqueI, uniqJ) => {
  const image = createElement('img', 'images', null);
  image.src = `../img/${icons.pop()}.png`;
  const imageAlt = Object.assign(image.src);
  image.alt = imageAlt.substring(imageAlt.length - 6);
  image.dataset.name = image.alt;
  image.dataset.uniqueId = `${uniqueI} ${uniqJ}`;
  return image;
};

const createField = (fieldSize, iconsArray, stickTo, action) => {
  for (let i = 0; i < fieldSize[0]; i += 1) {
    const row = createElement('div', 'rows', stickTo);

    for (let j = 0; j < fieldSize[1]; j += 1) {
      const button = createBtn(action);
      const image = createImg(iconsArray, i, j);
      row.appendChild(button);
      button.appendChild(image);
    }
  }
};

export default createField;
