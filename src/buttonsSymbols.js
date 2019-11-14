const symbolsStore = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r'];

const arrayLength = (fieldSize) => ((fieldSize[0] * fieldSize[1]) / 2);
const duplicate = (array) => array.concat(array);
const shuffle = (array) => array.sort(() => Math.random() - 0.5);

const shuffledArray = (fieldSize) => {
  const array = duplicate(symbolsStore.slice(0, arrayLength(fieldSize)));
  return shuffle(array);
};

export default shuffledArray;
