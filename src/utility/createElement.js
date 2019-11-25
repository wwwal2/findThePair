const createElement = (tag, className, stickTo) => {
  const element = document.createElement(tag);
  element.className = className;
  if (stickTo !== null) stickTo.appendChild(element);
  return element;
};

export default createElement;
