import initMenu from './menu';

const defaultSettings = {
  preview: 3000,
  gameOver: 6000000,
  difficulty: 'medium',
};

initMenu(defaultSettings, document.body);
