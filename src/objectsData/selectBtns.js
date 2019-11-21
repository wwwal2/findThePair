const getSelectBtns = (func, pickId) => [
  {
    className: 'selectBtn',
    id: 'previewTime',
    options: 5,
    optionsValues: [
      '3 sec',
      '4 sec',
      '5 sec',
      '6 sec',
      '7 sec',
    ],
    description: 'Set a preview time',
    onchange: func,
    pickId: 'preview',
  },
  {
    className: 'selectBtn',
    id: 'gameTimer',
    options: 10,
    optionsValues: [
      '1 minute',
      '2 minutes',
      '3 minutes',
      '4 minutes',
      '5 minutes',
      '6 minutes',
      '7 minutes',
      '8 minutes',
      '9 minutes',
      'Ten minutes!',
    ],
    description: 'Set a total game timer',
    onchange: func,
    pickId: 'gameTime',
  },
].filter((item) => item.pickId === pickId)

export default getSelectBtns;
