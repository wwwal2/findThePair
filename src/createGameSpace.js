import createElement from './utility/createElement';

function createGameSpace(stickTo) {
  const mainContainer = createElement('div', 'main-container', stickTo);
  const menuContainer = createElement('div', 'menu-container', mainContainer);
  const fieldContainer = createElement('div', 'field-container', mainContainer);
  return {
    mainContainer,
    menuContainer,
    fieldContainer,
  };
}

export default createGameSpace;
