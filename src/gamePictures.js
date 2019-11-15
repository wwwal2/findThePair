const arrayLength = (fieldSize) => Math.ceil((fieldSize[0] * fieldSize[1]) / 2);
const duplicate = (array) => array.concat(array);
const shuffle = (array) => array.sort(() => Math.random() - 0.5);

const shuffledPictures = (fieldSize) => {
  const array = [];
  for (let i = arrayLength(fieldSize); i > 0; i -= 1) array.push(i);
  return shuffle(duplicate(array));
};

export default shuffledPictures;
