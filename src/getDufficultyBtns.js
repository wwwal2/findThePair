const getDifficultyBtns = (startGame) => [
  {
    tag: 'button',
    className: 'difficultyBtns',
    textContent: 'Little',
    onclick: startGame,
  },
  {
    tag: 'button',
    className: 'difficultyBtns',
    textContent: 'Medium',
    onclick: startGame,
  },
  {
    tag: 'button',
    className: 'difficultyBtns',
    textContent: 'Big',
    onclick: startGame,
  },
];

export default getDifficultyBtns;
