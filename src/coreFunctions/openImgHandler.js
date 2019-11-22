const pickArray = [];

const eraseArray = (array) => array.splice(0, 2);

const makeHidden = (elements) => {
  elements.forEach((item) => {
    item.target.className = 'hidden';
  });
};

const youWin = () => {
  const getHidden = document.getElementsByClassName('hidden');
  const start = document.getElementsByClassName('start');
  if (getHidden.length === 0 && start.item(0).disabled) {
    console.log('you win');
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
