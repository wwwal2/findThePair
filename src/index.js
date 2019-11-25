import initGame from './game';

const defaultSettings = {
  preview: 1000,
  gameOver: 60000,
  difficulty: 'big',
};

initGame(defaultSettings, document.body);
