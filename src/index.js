import './style.scss';
import Game from './Game';

const defaultSettings = {
  fraction: { default: 4, min: 2, max: 6 },
  preview: { default: 1, min: 1, max: 7 },
  gameover: { default: 1, min: 1, max: 15 },
};

const game = new Game(defaultSettings);
game.run();
