const getDifficultyBtns = (startGame) => [
  {
    tag: 'button',
    className: 'difficultyBtns',
    textContent: 'Easy',
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
    textContent: 'Hard',
    onclick: startGame,
  },
  {
    tag: 'button',
    className: 'refreshBtn',
    textContent: 'Play again',
    onclick: startGame,
  },
];

export default getDifficultyBtns;
