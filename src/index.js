import './style.scss';
import Game from './Game';

const defaultControllersSettings = {
  height: { default: 10, min: 2, max: 6 },
  width: { default: 10, min: 2, max: 6 },
  preview: { default: 4, min: 1, max: 7 },
  gameover: { default: 3, min: 1, max: 15 },
};

const game = new Game(defaultControllersSettings);
game.run();
