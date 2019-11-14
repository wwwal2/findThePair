const symbolsStore = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'];

const arrayLength = (fieldSize) => ((fieldSize[0] * fieldSize[1]) / 2);
const duplicate = (array) => array.concat(array);
const shuffle = (array) => array.sort(() => Math.random() - 0.5);

const shuffledArray = (fieldSize) => {
  const array = duplicate(symbolsStore.slice(0, arrayLength(fieldSize)));
  return shuffle(array);
};

export default shuffledArray;
