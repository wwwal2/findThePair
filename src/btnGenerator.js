const difficultyContainer = document.createElement('div');
difficultyContainer.class = 'difficultyContainer';

const btnArray = [
  {
    tag: 'button',
    className: 'difficultyBtns',
    textContent: 'Easy',
  },
  {
    tag: 'button',
    className: 'difficultyBtns',
    textContent: 'Medium',
  },
  {
    tag: 'button',
    className: 'difficultyBtns',
    textContent: 'Hard',
    // onclick: myFunc
  },
];

const btnGenerator = (array, stickTo) => {
  const btnTemplate = (tag, className, textContent) => {
    const btn = document.createElement(tag);
    btn.className = className;
    btn.textContent = textContent;
    return btn;
  };

  array.forEach((btn) => {
    difficultyContainer.appendChild(btnTemplate(btn.tag, btn.className, btn.textContent));
  });

  stickTo.appendChild(difficultyContainer);
};

export { btnGenerator, btnArray };
