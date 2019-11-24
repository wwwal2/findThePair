import createElement from '../coreFunctions/createElement';

const createSelect = (className, options, onchange) => {
  const select = createElement('select', className, null);
  select.onchange = onchange;

  options.forEach((item) => {
    const option = document.createElement('option');
    select.appendChild(option);
    option.value = item.value;
    option.textContent = item.label;
  });

  return select;
};

const advancetBlockCreator = (array, stickTo, containerClass) => {
  const container = createElement('div', containerClass, null);
  array.forEach((obj) => {
    container.appendChild(createSelect(
      obj.className,
      obj.options,
      obj.onchange,
    ));
  });
  stickTo.appendChild(container);
};

export default advancetBlockCreator;
