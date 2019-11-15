const btnContainer = document.createElement('div');
btnContainer.className = 'btnContainer';

const btnGenerator = (array, stickTo) => {
  const btnTemplate = (tag, className, textContent, onclick) => {
    const btn = document.createElement(tag);
    btn.className = className;
    btn.textContent = textContent;
    btn.onclick = onclick;
    return btn;
  };

  array.forEach((btn) => {
    btnContainer.appendChild(btnTemplate(btn.tag, btn.className, btn.textContent, btn.onclick));
  });
  stickTo.appendChild(btnContainer);
};

export default btnGenerator;
