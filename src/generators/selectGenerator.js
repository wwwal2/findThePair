import createElement from '../coreFunctions/createElement';

const selectContainer = createElement('div', 'selectContainer', null);

const createSelect = (className, id, options, onchange) => {
  const select = createElement('select', className, null);
  select.id = id;
  select.onchange = onchange;

  options.forEach((item) => {
    const option = document.createElement('option');
    select.appendChild(option);
    option.value = item.value;
    option.textContent = item.label;
  });

  return select;
};

const selectGenerator = (array, stickTo) => {
  array.forEach((obj) => {
    selectContainer.appendChild(createSelect(
      obj.className,
      obj.id,
      obj.options,
      obj.onchange,
    ));
  });
  stickTo.appendChild(selectContainer);
};

export default selectGenerator;
