import selectElements from '../utility/selectElements';
import createElement from '../utility/createElement';
import switchProperty from '../utility/switchProperty';

const pickArray = [];

const eraseArray = (array) => array.splice(0, array.length);

let gameOverTimestamp;
const passTimestamp = (timestamp) => {
  gameOverTimestamp = timestamp;
};

const youWin = () => {
  const getHidden = selectElements('hidden');
  if (getHidden.length === 0) {
    clearTimeout(gameOverTimestamp);
    selectElements('field-container')[0].remove();
    const congratContainer = createElement('div', 'congrat-container', selectElements('main-container')[0]);
    const image = createElement('img', 'congrat-image', congratContainer);
    image.src = '../img/Congratulation.png';
  }
};

const isEven = (arr) => {
  if (arr[0].target.dataset.name === arr[1].target.dataset.name
    && arr[0].target.dataset.uniqueId !== arr[1].target.dataset.uniqueId) {
    switchProperty('disabled', true, arr.map((obj) => obj.target.parentNode));
    eraseArray(arr);
  } else {
    setTimeout(() => {
      switchProperty('className', 'hidden', arr.map((obj) => obj.target));
      eraseArray(arr);
    }, 500);
  }
};

const openImgHandler = (event) => {
  event.target.className = 'visible';
  pickArray.push(event);

  if (pickArray.length >= 2) {
    isEven(pickArray);
  }
  youWin();
};

export { openImgHandler, passTimestamp };
