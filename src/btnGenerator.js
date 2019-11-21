const containerTemplate = (containerClass) => {
  const container = document.createElement('div');
  container.className = 'btnContainer';
  return container;
};

const btnTemplate = (tag, className, textContent, onclick) => {
  const btn = document.createElement(tag);
  btn.className = className;
  btn.textContent = textContent;
  btn.onclick = onclick;
  return btn;
};

// const labelTemplate = () => {
//   const labelElement = document.createElement('label');
//   labelElement.for = btnContainer.id;
//   labelElement.innerText = 'Select the field size';
//   labelElement.className = 'fieldLabel';
//   btnContainer.appendChild(labelElement);
// };

const btnGenerator = (array, stickTo, containerClass) => {
  // labelTemplate();
  const container = containerTemplate(containerClass);
  array.forEach((btn) => {
    container.appendChild(btnTemplate(
      btn.tag,
      btn.className,
      btn.textContent,
      btn.onclick,
    ));
  });
  stickTo.appendChild(container);
};

export default btnGenerator;
