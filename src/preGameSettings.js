const preGameSettings = {
  preview: 3000,
  time: 60000,
  difficulty: 'medium',
};

const setTimers = (event) => {
  if (event.originalTarget.id === 'previewTime') {
    preGameSettings.preview = (Number(event.target.value) + 3) * 1000;
  } else {
    preGameSettings.time = (Number(event.target.value) + 1) * 60000;
  }
};

const setDifficulty = (event) => {
  preGameSettings.difficulty = event.target.textContent.toLowerCase()
};

export {
  setTimers,
  preGameSettings,
  setDifficulty,
};
