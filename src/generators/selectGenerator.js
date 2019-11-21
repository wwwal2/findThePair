import createElement from '../createElement';

const selectContainer = createElement('div', 'selectContainer', null);

const selectTemplate = (optionsNum, className, options, onchange) => {
  const select = createElement('select', className, null);
  select.onchange = onchange;

  for (let i = 0; i < optionsNum; i += 1) {
    const option = document.createElement('option');
    select.appendChild(option);
    option.value = i;
    option.textContent = options[i];
  }
  return select;
};

const selectGenerator = (array, stickTo) => {
  array.forEach((obj) => {
    selectContainer.appendChild(selectTemplate(
      obj.options,
      obj.className,
      obj.optionsValues,
      obj.onchange,
    ));
  });
  stickTo.appendChild(selectContainer);
};

export default selectGenerator;
