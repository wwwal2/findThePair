import './style.scss';
import initGame from './initGame';

const defaultSettings = {
  width: 3,
  height: 3,
  preview: 1,
  gameOver: 3,
};

initGame(defaultSettings);
