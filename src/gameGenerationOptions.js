const preview = (time) => {
  const AllImages = Array.from(document.body.getElementsByTagName('img'));
  setTimeout(() => {
    AllImages.forEach((pic) => {
      pic.className = 'hidden';
    });
  }, time);
};

const gameEnd = (time) => {
  const allBtns = Array.from(document.body.getElementsByTagName('button'));
  setTimeout(() => {
    allBtns.forEach((btn) => {
      btn.disabled = 'true';
    });
  }, time);
};

const disableStartBtns = () => {
  const btns = Array.from(document.body.getElementsByClassName('difficultyBtns'));
  btns.forEach((btn) => {
    btn.disabled = 'true';
  });
};

const fieldSize = {
  little: [4, 4],
  medium: [5, 5],
  big: [6, 6],
};

export {
  preview,
  disableStartBtns,
  fieldSize,
  gameEnd,
};
