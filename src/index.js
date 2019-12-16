import './style.scss';
import initGame from './initGame';

const defaultSettings = {
  width: 6,
  height: 6,
  preview: 1,
  gameOver: 3,
};

initGame(defaultSettings);
