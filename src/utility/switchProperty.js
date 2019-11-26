const switchProperty = (propertyName, value, elements) => {
  elements.forEach((obj) => {
    obj[propertyName] = value;
  });
};

export default switchProperty;
