const timeSettings = {
  preview: 1000,
  time: 60000,
};

const setTimers = (event) => {
  if (event.originalTarget.id === 'previewTime') {
    timeSettings.preview = (Number(event.target.value) + 3) * 1000;
  } else {
    timeSettings.time = (Number(event.target.value) + 1) * 60000;
  }
};

export { setTimers, timeSettings };
