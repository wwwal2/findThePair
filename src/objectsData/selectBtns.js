const getSelectBtns = (func, id) => [
  {
    className: 'selectBtn',
    id: 'preview',
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
    className: 'selectBtn',
    id: 'gameTime',
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
].filter((item) => item.id === id);

export default getSelectBtns;
