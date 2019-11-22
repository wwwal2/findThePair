import createElement from '../coreFunctions/createElement';

const selectContainer = createElement('div', 'selectContainer', null);

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
  // const select = createElement('select', className, null);
  array.forEach((obj) => {
    selectContainer.appendChild(createSelect(
      obj.className,
      obj.options,
      obj.onchange,
    ));
  });
  stickTo.appendChild(selectContainer);
};

export default advancetBlockCreator;


// import createElement from '../coreFunctions/createElement';

// const createObj = (tag, className, textContent, onclick) => {
//   const obj = createElement(tag, className, null);
//   obj.textContent = textContent;
//   obj.onclick = onclick;
//   return obj;
// };

// const btnGenerator = (array, stickTo, containerClass) => {
//   const container = createElement('div', containerClass, null);
//   array.forEach((elem) => {
//     container.appendChild(createObj(
//       elem.tag,
//       elem.className,
//       elem.textContent,
//       elem.onclick,
//     ));
//   });
//   stickTo.appendChild(container);
// };

// export default btnGenerator;
