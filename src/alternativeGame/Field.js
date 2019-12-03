class Field {
  constructor(fieldContainer, settings, timeStamp) {
    this.fieldContainer = fieldContainer;
    this.settings = settings;
    this.timeStamp = timeStamp;

    // Object.defineProperty(this, 'fieldSizes', {
    //   configurable: false,
    //   writable: false,
    //   value: {
    //     little: [4, 4],
    //     medium: [5, 5],
    //     big: [6, 6],
    //   },
    // });
  }


  createButtons() {
  }
}
export default Field;


