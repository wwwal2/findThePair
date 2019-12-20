import './style.scss';
import Game from './Game';

const defaultSettings = {
  height: { default: 3, min: 2, max: 6 },
  width: { default: 3, min: 2, max: 6 },
  preview: { default: 1, min: 1, max: 7 },
  gameover: { default: 1, min: 1, max: 15 },
};

const game = new Game(defaultSettings);
game.run();
