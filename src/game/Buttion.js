import Utility from './Utility';

class Button {
  static Create(className, x, y) {
    const btn = Utility.createElement('button', className);
    btn.disabled = false;
    btn.dataset.x = x;
    btn.dataset.y = y;
    return btn;
  }
}

export default Button;
