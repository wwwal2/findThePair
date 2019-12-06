import Utility from './Utility';
import showPic from './showPic';

class Button {
  static Create(x, y) {
    const btn = Utility.createElement('button', 'cell');
    btn.disabled = false;
    btn.dataset.x = x;
    btn.dataset.y = y;
    btn.onclick = showPic;
    return btn;
  }
}

export default Button;
