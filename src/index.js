import initGame from './game';

const defaultSettings = {
  preview: 3000,
  gameOver: 60000,
  difficulty: 'big',
};

initGame(defaultSettings, document.body);
