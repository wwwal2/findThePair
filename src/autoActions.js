const hideTimeOut = (time) => {
  const AllImages = Array.from(document.body.getElementsByTagName('img'));
  setTimeout(() => {
    AllImages.forEach((pic) => {
      pic.className = 'hidden';
    });
  }, time);
};

const gameOverTimeOut = (time) => {
  const allBtns = Array.from(document.body.getElementsByTagName('button'));
  setTimeout(() => {
    allBtns.forEach((btn) => {
      btn.disabled = true;
    });
    const timeUp = document.body.getElementsByClassName('remove');
    timeUp.item(0).className = 'display';
  }, time);
};

const disableStartBtns = () => {
  const btns = Array.from(document.body.getElementsByClassName('start'));
  btns.forEach((btn) => {
    btn.disabled = true;
  });
};

const clearPick = () => {
  const elements = Array.from(document.getElementsByClassName('pre-picked'));
  elements.forEach((btn) => {
    btn.className = 'not-picked';
  });
};

const fieldSize = {
  little: [4, 4],
  medium: [5, 5],
  big: [6, 6],
};

export {
  hideTimeOut,
  gameOverTimeOut,
  disableStartBtns,
  fieldSize,
  clearPick,
};
