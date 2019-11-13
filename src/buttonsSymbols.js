const symbolsStore = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r"];

const symbolsToDispatch = (fieldSize) => ((fieldSize[0] * fieldSize[1]) / 2)
const shuffle = (array) => array.sort(() => Math.random() - 0.5);
const shuffledArray = shuffle(symbolsStore.slice(0, symbolsToDispatch([4, 4])))

export { shuffledArray };
