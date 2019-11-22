const getElements = (func, pickClass) => [
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
        label: '3 sec',
      },
      {
        value: 4000,
        label: '4 sec',
      },
      {
        value: 5000,
        label: '5 sec',
      },
      {
        value: 6000,
        label: '6 sec',
      },
      {
        value: 7000,
        label: '7 sec',
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
        label: '1 minute',
      },
      {
        value: 120000,
        label: '2 minutes',
      },
      {
        value: 180000,
        label: '3 minutes',
      },
      {
        value: 240000,
        label: '4 minutes',
      },
      {
        value: 300000,
        label: '5 minutes',
      },
      {
        value: 360000,
        label: '6 minutes',
      },
      {
        value: 420000,
        label: '7 minutes',
      },
      {
        value: 480000,
        label: '8 minutes',
      },
      {
        value: 540000,
        label: '9 minutes',
      },
      {
        value: 600000,
        label: 'Ten minutes!',
      },
    ],
    onchange: func,
  },
  {
    tag: 'div',
    className: 'remove',
    textContent: 'The time is up!',
    onclick: func,
  },
].filter((btn) => btn.className === pickClass);

export default getElements;
