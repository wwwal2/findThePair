const mainContainer = document.createElement('div');
mainContainer.className = 'mainContainer';
document.body.appendChild(mainContainer);

const btnContainer = document.createElement('div');
btnContainer.className = 'btnContainer';
mainContainer.appendChild(btnContainer);

export {
  mainContainer,
  btnContainer,
};
