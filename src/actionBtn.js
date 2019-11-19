
const pickArray = [];

const eraseArray = (array) => array.splice(0, 2);

const makeHidden = (elements) => {
  elements.forEach((item) => {
    item.target.className = 'hidden';
  });
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

const action = (event) => {
  event.target.className = 'visible';
  pickArray.push(event);

  if (pickArray.length >= 2) {
    isEven(pickArray);
  }
};

export default action;
