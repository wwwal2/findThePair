const getElements = (pickClass, func) => [
  {
    tag: 'button',
    className: 'difficulty-btns',
    textContent: 'Little',
    onclick: func,
  },
  {
    tag: 'button',
    className: 'difficulty-btns',
    textContent: 'Medium',
    onclick: func,
  },
  {
    tag: 'button',
    className: 'difficulty-btns',
    textContent: 'Big',
    onclick: func,
  },
  {
    tag: 'button',
    className: 'start',
    textContent: 'START',
    onclick: func,
  },
  {
    tag: 'button',
    className: 'play-again',
    textContent: 'Play again',
    onclick: func,
  },
  {
    tag: 'select',
    className: 'select-btn',
    options: [
      {
        value: 3000,
        textContent: '3 sec',
      },
      {
        value: 4000,
        textContent: '4 sec',
      },
      {
        value: 5000,
        textContent: '5 sec',
      },
      {
        value: 6000,
        textContent: '6 sec',
      },
      {
        value: 7000,
        textContent: '7 sec',
      },
    ],
    onchange: func,
  },
  {
    tag: 'select',
    className: 'select-btn',
    options: [
      {
        value: 60000,
        textContent: '1 minute',
      },
      {
        value: 120000,
        textContent: '2 minutes',
      },
      {
        value: 180000,
        textContent: '3 minutes',
      },
      {
        value: 240000,
        textContent: '4 minutes',
      },
      {
        value: 300000,
        textContent: '5 minutes',
      },
      {
        value: 360000,
        textContent: '6 minutes',
      },
      {
        value: 420000,
        textContent: '7 minutes',
      },
      {
        value: 480000,
        textContent: '8 minutes',
      },
      {
        value: 540000,
        textContent: '9 minutes',
      },
      {
        value: 600000,
        textContent: 'Ten minutes!',
      },
    ],
    onchange: func,
  },
  {
    tag: 'div',
    className: 'select-textContent',
    textContent: 'Set a preview time',
    onclick: func,
  },
  {
    tag: 'div',
    className: 'select-textContent',
    textContent: 'Set a totall game time',
    onclick: func,
  },
].filter((btn) => btn.className === pickClass);

export default getElements;
