import selectElements from '../utility/selectElements';

const removePictures = (timer) => {
  const buttons = selectElements('field-btns');
  setTimeout(() => {
    buttons.forEach((btn) => {
      btn.children.item(0).remove();
      btn.disabled = false;
    });
  }, timer);
};

export default removePictures;
