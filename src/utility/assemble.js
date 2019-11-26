import advancetBlockCreator from '../blockCreators/advancedBlockCreator';
import simpleBlockCreator from '../blockCreators/simpleBlockCreator';


const assemble = (stickTo, ...blocks) => {
  blocks.forEach((block) => {
    if (block[0].options) {
      advancetBlockCreator(block, stickTo, `${block[0].className}-container`);
    } else {
      simpleBlockCreator(block, stickTo, `${block[0].className}-container`);
    }
  });
};

export default assemble;
