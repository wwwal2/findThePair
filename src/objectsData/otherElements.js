const otherElements = (pickFunction, pickClass) => [
  {
    tag: 'div',
    className: 'remove',
    textContent: 'The time is up!',
    onclick: pickFunction,
  },
].filter((btn) => btn.className === pickClass);

export default otherElements;
