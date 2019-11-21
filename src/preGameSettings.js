const preGameSettings = {
  preview: 1000,
  time: 3000,
  difficulty: 'medium',
};

const clearPick = () => {
  const elements = Array.from(document.getElementsByClassName('prePicked'));
  elements.forEach((btn) => {
    btn.className = 'notPicked';
  });
};

const setTimers = (event) => {
  if (event.originalTarget.id === 'previewTime') {
    preGameSettings.preview = (Number(event.target.value) + 3) * 1000;
  } else {
    preGameSettings.time = (Number(event.target.value) + 1) * 60000;
  }
};

const setDifficulty = (event) => {
  preGameSettings.difficulty = event.target.textContent.toLowerCase();
  clearPick();
  event.target.className = 'prePicked';
};

export {
  setTimers,
  preGameSettings,
  setDifficulty,
};
