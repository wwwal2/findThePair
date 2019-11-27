import createElement from './utility/createElement';

const assemble = (stickTo, ...blocksGroup) => {
  blocksGroup.forEach((block) => {
    const container = createElement('div', `${block[0].className}-container`, stickTo);
    block.forEach((obj) => {
      const element = createElement(obj.tag, obj.className, container);

      if (obj.options) {
        element.onchange = obj.onchange;
        obj.options.forEach((option) => {
          const myOption = createElement('option', 'options', element);
          Object.assign(myOption, option);
        });
      } else {
        Object.assign(element, obj);
      }
    });
  });
};

export default assemble;
