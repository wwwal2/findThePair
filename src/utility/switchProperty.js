import selectElements from './selectElements';

const switchProperty = (property, value, ...elements) => {
  const allElements = selectElements(...elements);
  allElements.forEach((obj) => {
    obj[property] = value;
  });
};

export default switchProperty;
