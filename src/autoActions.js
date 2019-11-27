import selectElements from './utility/selectElements';
import switchProperty from './utility/switchProperty';
import createElement from './utility/createElement';

const hideTimeOut = (time) => {
  setTimeout(() => {
    switchProperty('disabled', false, selectElements('field-btns'));
    switchProperty('className', 'hidden', selectElements('images'));
  }, time);
};

const gameOverTimeOut = (time, stickTo) => setTimeout(() => {
  switchProperty('disabled', true, selectElements('field-btns'));
  const timeUpMessage = createElement('div', 'time-up-container', stickTo);
  const image = createElement('img', 'time-up-image', timeUpMessage);
  image.src = '../img/timeUp.png';
}, time);

const transformMenu = () => {
  switchProperty('className', 'remove', selectElements('difficulty-btns-container', 'select-btn-container', 'start'));
};

const clearHighlight = () => {
  switchProperty('className', 'difficulty-btns', selectElements('highlight'));
};

const fieldSize = {
  little: [4, 4],
  medium: [5, 5],
  big: [6, 6],
};

export {
  hideTimeOut,
  gameOverTimeOut,
  transformMenu,
  fieldSize,
  clearHighlight,
};
