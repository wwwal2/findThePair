import selectElements from '../utility/selectElements';
import createElement from '../utility/createElement';
import switchProperty from '../utility/switchProperty';

const pickArray = [];

const eraseArray = (array) => array.splice(0, array.length);

const youWin = () => {
  const getHidden = selectElements('hidden');
  if (getHidden.length === 0) {
    const containers = selectElements('field-container', 'main-container');
    containers.forEach((obj) => {
      if (obj.className === 'field-container') {
        obj.remove();
      } else {
        const congratContainer = createElement('div', 'congrat-container', obj);
        const image = createElement('img', 'congrat-image', congratContainer);
        image.src = '../img/Congratulation.png';
      }
    });
  }
};

const isEven = (arr) => {
  if (arr[0].target.dataset.name === arr[1].target.dataset.name
    && arr[0].target.dataset.uniqueId !== arr[1].target.dataset.uniqueId) {
    eraseArray(arr);
  } else {
    setTimeout(() => {
      switchProperty('className', 'hidden', [arr[0].target, arr[1].target]);
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

export default openImgHandler;
