import selectElements from './utility/selectElements';
import switchProperty from './utility/switchProperty';
import createElement from './utility/createElement';

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

export {
  gameOverTimeOut,
  transformMenu,
  clearHighlight,
};
