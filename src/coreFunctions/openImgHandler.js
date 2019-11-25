import selectElements from '../utility/selectElements';
import createElement from '../utility/createElement';

const pickArray = [];

const eraseArray = (array) => array.splice(0, array.length);

const makeHidden = (elements) => {
  elements.forEach((item) => {
    item.target.className = 'hidden';
  });
};

const youWin = () => {
  const getHidden = selectElements('hidden');
  if (getHidden.length === 0) {
    const containers = selectElements('field-container', 'main-container');
    containers.forEach((obj) => {
      if (obj.className === 'field-container') {
        obj.remove();
      } else {
        const congrat = createElement('div', 'congratulations', obj);
        congrat.innerText = 'Congratulations!';
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
      makeHidden(arr);
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
