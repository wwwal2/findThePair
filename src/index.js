import './style.scss';
import initGame from './initGame';

const defaultSettings = {
  width: 2,
  height: 6,
  preview: 4,
  gameOver: 15,
};

initGame(defaultSettings);
