import './style.scss';
import initGame from './initGame';

const defaultSettings = {
  width: 3,
  height: 3,
  preview: 3,
  gameOver: 6,
};

initGame(defaultSettings);
