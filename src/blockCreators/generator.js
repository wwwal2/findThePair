const advancetBlockCreator = (array, stickTo) => {
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