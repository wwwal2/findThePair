const fadePic = (time) => {
  const AllImages = Array.from(document.body.getElementsByTagName('img'));
  setTimeout(() => {
    AllImages.forEach((pic) => {
      pic.className = 'hidden';
    });
  }, time);
};

const disableStartBtns = () => {
  const btns = Array.from(document.body.getElementsByClassName('difficultyBtns'));
  btns.forEach((btn) => {
    btn.disabled = 'true';
  });
};

export { fadePic, disableStartBtns };
