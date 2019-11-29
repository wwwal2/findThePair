import createElement from '../utility/createElement';

const createImage = (stickTo, tableOfMatches, x, y) => {
  if (x && y) {
    const image = createElement('img', 'image', stickTo);
    image.src = `../img/${tableOfMatches[x][y]}.png`;
  }
};

export default createImage;
