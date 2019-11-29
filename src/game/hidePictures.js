import selectElements from '../utility/selectElements';

const hidePictures = (timer) => {
  const buttons = selectElements('field-btns');
  setTimeout(() => {
    buttons.forEach((btn) => {
      btn.removeChild(btn.firstChild);
      btn.disabled = false;
    });
  }, timer);
};

export default hidePictures;
