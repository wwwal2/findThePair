import selectElements from '../utility/selectElements';
import createElement from '../utility/createElement';

const youWin = (timeStamp) => {
  const buttons = selectElements('field-btns').filter((btn) => btn.childElementCount === 0);
  if (buttons.length === 0) {
    selectElements('field-container')[0].remove();
    const congratContainer = createElement('div', 'congrat-container', selectElements('main-container')[0]);
    const image = createElement('img', 'congrat-image', congratContainer);
    image.src = '../img/Congratulation.png';
    clearTimeout(timeStamp);
  }
};

export default youWin;
