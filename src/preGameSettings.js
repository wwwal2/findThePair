
const clearPick = () => {
  const elements = Array.from(document.getElementsByClassName('prePicked'));
  elements.forEach((btn) => {
    btn.className = 'notPicked';
  });
};

const setPreview = (event) => {
  return (Number(event.target.value) + 3) * 1000;
};
const setGameTime = (event) => {
  return (Number(event.target.value) + 1) * 60000;
};

const setDifficulty = (event) => {
  return event.target.textContent.toLowerCase();
  // clearPick();
  // event.target.className = 'prePicked';
};

export {
  setPreview,
  setGameTime,
  setDifficulty,
};
