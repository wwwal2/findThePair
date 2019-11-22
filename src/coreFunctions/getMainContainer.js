import createElement from './createElement';

function createContainer(container) {
  const mainContainer = createElement('div', 'mainContainer', container);
  const menuContainer = createElement('div', 'menuContainer', mainContainer);
  return {
    mainContainer,
    menuContainer,
  };
}

export default createContainer;
