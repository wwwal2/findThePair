class Controller {
  constructor(target, settings) {
    this.target = Array.from(target[0].children);
    [this.label, this.increase, this.value, this.reduce] = this.target;

    this.value.innerText = settings.default;

    this.increase.onclick = () => {
      if (Number(this.value.innerText) < settings.max) {
        this.value.innerText = Number(this.value.innerText) + 1;
      }
    };
    this.reduce.onclick = () => {
      if (Number(this.value.innerText) > settings.min) {
        this.value.innerText = Number(this.value.innerText) - 1;
      }
    };
  }
}

export default Controller;
