const generateTableOfMatches = (fieldSize, values) => {
  const tableOfMatches = [];

  for (let i = 0; i < fieldSize[0]; i += 1) {
    tableOfMatches.push([]);
    for (let j = 0; j < fieldSize[1]; j += 1) {
      tableOfMatches[i].push(values.pop());
    }
  }
  return tableOfMatches;
};

export default generateTableOfMatches;
