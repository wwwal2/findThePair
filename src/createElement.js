const createElement = (tag, className, stickTo) => {
  const container = document.createElement(tag);
  container.className = className;
  if (stickTo !== null) stickTo.appendChild(container);
  return container;
};

export default createElement;
