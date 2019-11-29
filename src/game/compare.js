import { refresh } from './counter';
import switchProperty from '../utility/switchProperty';

let picked = 0;

const getNum = (obj) => {
  const shortcut = obj.children.item(0).src;
  return shortcut.replace(/\D/g, '').substring(4, shortcut.length);
};

const compare = (object) => {
  if (picked === 0) {
    picked = object;
    return;
  }
  if (getNum(picked) === getNum(object)) {
    picked = 0;
  } else {
    setTimeout(() => {
      object.children.item(0).remove();
      picked.children.item(0).remove();
      switchProperty('disabled', false, [object, picked]);
      picked = 0;
      refresh();
    }, 1000);
  }
};

export default compare;
