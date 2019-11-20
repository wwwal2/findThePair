const selectBtns = (timeSet) => [
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
    onchange: timeSet,
  },
  {
    className: 'selectBtn',
    id: 'gameTimer',
    options: 4,
    optionsValues: [
      '1 minute',
      '2 minutes',
      '3 minutes',
      '4 minutes',
    ],
    description: 'Set a total game timer',
    onchange: timeSet,
  },
];

export default selectBtns;
