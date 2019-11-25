import createElement from '../utility/createElement';

const createObj = (tag, className, textContent, onclick) => {
  const obj = createElement(tag, className, null);
  obj.textContent = textContent;
  obj.onclick = onclick;
  return obj;
};

const btnGenerator = (array, stickTo, containerClass) => {
  const container = createElement('div', containerClass, null);
  array.forEach((elem) => {
    container.appendChild(createObj(
      elem.tag,
      elem.className,
      elem.textContent,
      elem.onclick,
    ));
  });
  stickTo.appendChild(container);
};

export default btnGenerator;
