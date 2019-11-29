import initMenu from './menu';

const defaultSettings = {
  preview: 3000,
  gameOver: 600000,
  difficulty: 'medium',
};

initMenu(defaultSettings, document.body);
