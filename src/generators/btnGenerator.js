import createElement from '../createElement';

const btnTemplate = (tag, className, textContent, onclick) => {
  const btn = createElement(tag, className, null);
  btn.textContent = textContent;
  btn.onclick = onclick;
  return btn;
};

const btnGenerator = (array, stickTo, containerClass) => {
  const container = createElement('div', containerClass, null);
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
