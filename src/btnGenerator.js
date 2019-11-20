const btnContainer = document.createElement('div');
btnContainer.className = 'btnContainer';
btnContainer.id = 'btnContainerId';

const btnTemplate = (tag, className, textContent, onclick) => {
  const btn = document.createElement(tag);
  btn.className = className;
  btn.textContent = textContent;
  btn.onclick = onclick;
  return btn;
};

const labelTemplate = () => {
  const labelElement = document.createElement('label');
  labelElement.for = btnContainer.id;
  labelElement.innerText = 'Select the field size';
  labelElement.className = 'fieldLabel';
  btnContainer.appendChild(labelElement);
};

const btnGenerator = (array, stickTo) => {
  labelTemplate();
  array.forEach((btn) => {
    btnContainer.appendChild(btnTemplate(btn.tag, btn.className, btn.textContent, btn.onclick));
  });
  stickTo.appendChild(btnContainer);
};

export default btnGenerator;
