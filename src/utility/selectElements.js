const selectElements = (...classes) => classes
  .reduce(
    (acc, current) => acc.concat(
      Array.from(document.body.getElementsByClassName(current)),
    ), [],
  );

export default selectElements;
