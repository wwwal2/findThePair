import selectElements from './utility/selectElements';
import switchProperty from './utility/switchProperty';

const hideTimeOut = (time) => {
  setTimeout(() => {
    switchProperty('disabled', false, 'field-btns');
    switchProperty('className', 'hidden', 'images');
  }, time);
};

const gameOverTimeOut = (time) => setTimeout(() => {
  switchProperty('disabled', true, 'field-btns');
  const timeUp = selectElements('remove');
  timeUp[2].className = 'display';
}, time);

const transformMenu = () => {
  switchProperty('className', 'remove', 'difficulty-container', 'select-container', 'start');
  const start = selectElements('start');
  start[0].disabled = true;
};

const clearHighlight = () => {
  switchProperty('className', 'difficulty-btns', 'highlight');
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
