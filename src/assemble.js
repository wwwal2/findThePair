import createElement from './utility/createElement';

const assemble = (stickTo, ...blocksGroup) => {
  blocksGroup.forEach((block) => {
    const container = createElement('div', `${block[0].className}-container`, stickTo);
    block.forEach((obj) => {
      const element = createElement(obj.tag, obj.className, container);

      if (obj.options) {
        obj.options.forEach((option) => {
          element.onchange = obj.onchange;
          const myOption = createElement('option', 'options', element);
          myOption.value = option.value;
          myOption.textContent = option.textContent;
        });
      } else {
        element.textContent = obj.textContent;
        element.onclick = obj.onclick;
      }
    });
  });
};

export default assemble;
