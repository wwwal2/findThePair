const getMenuBtns = (pickFunction, pickClass) => [
  {
    tag: 'button',
    className: 'difficultyBtns',
    textContent: 'Little',
    onclick: pickFunction,
  },
  {
    tag: 'button',
    className: 'difficultyBtns',
    textContent: 'Medium',
    onclick: pickFunction,
  },
  {
    tag: 'button',
    className: 'difficultyBtns',
    textContent: 'Big',
    onclick: pickFunction,
  },
  {
    tag: 'button',
    className: 'start',
    textContent: 'START',
    onclick: pickFunction,
  },
  {
    tag: 'button',
    className: 'playAgain',
    textContent: 'Play again',
    onclick: pickFunction,
  },
].filter((btn) => btn.className === pickClass);

export default getMenuBtns;
