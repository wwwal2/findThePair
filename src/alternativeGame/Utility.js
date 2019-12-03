// class Utility {
//   constructor(...args) {
//     this.args = args;
//   }

//   createElement(tag, className, stickTo) {
//     const element = document.createElement(tag);
//     element.className = className;
//     if (stickTo !== null) stickTo.appendChild(element);
//     return element;
//   };

//   selectElements(...classes) {
//     return classes.reduce(
//       (acc, current) => acc.concat(
//         Array.from(document.body.getElementsByClassName(current)),
//       ), [],
//     );
//   }

//   switchProperty(propertyName, value, elements) {
//     return elements.forEach((obj) => {
//       obj[propertyName] = value;
//     });
//   };

// }

// export default Utility;
