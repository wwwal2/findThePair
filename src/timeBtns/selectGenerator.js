const selectContainer = document.createElement('div');
selectContainer.className = 'selectContainer';

const selectTemplate = (optionsNum, className, id, description, options, onchange) => {
  const select = document.createElement('select');
  select.className = className;
  select.id = id;
  select.onchange = onchange;

  const labelElement = document.createElement('label');
  labelElement.for = id;
  labelElement.innerText = description;
  labelElement.className = 'labels';
  selectContainer.appendChild(labelElement);

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
      obj.id,
      obj.description,
      obj.optionsValues,
      obj.onchange,
    ));
  });
  stickTo.appendChild(selectContainer);
};

export default selectGenerator;
