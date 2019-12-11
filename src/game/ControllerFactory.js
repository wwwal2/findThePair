import Utility from './Utility';

export default class ControllerFactory {
  create(target, settings) {
    const controller = new ControllerFactory();

    controller.domTarget = Utility.selectElements(target);
    controller.innerElements = Array.from(controller.domTarget[0].children);
    [
      controller.label,
      controller.increase,
      controller.value,
      controller.reduce,
    ] = controller.innerElements;
    controller.value.innerText = settings.default;

    controller.increase.onclick = () => {
      if (Number(controller.value.innerText) < settings.max) {
        controller.value.innerText = Number(controller.value.innerText) + 1;
      }
    };
    controller.reduce.onclick = () => {
      if (Number(controller.value.innerText) > settings.min) {
        controller.value.innerText = Number(controller.value.innerText) - 1;
      }
    };
    return controller;
  }
}
