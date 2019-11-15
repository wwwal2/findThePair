export default function (difficulty) {
  return [
    {
      tag: 'button',
      className: 'difficultyBtns',
      textContent: 'Easy',
      onclick: difficulty,
    },
    {
      tag: 'button',
      className: 'difficultyBtns',
      textContent: 'Medium',
      onclick: difficulty,
    },
    {
      tag: 'button',
      className: 'difficultyBtns',
      textContent: 'Hard',
      onclick: difficulty,
    },
    {
      tag: 'button',
      className: 'refreshBtn',
      textContent: 'Play again',
      onclick: difficulty,
    },
  ];
}
