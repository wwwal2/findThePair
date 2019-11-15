const pickArray = [];

const bingoCheck = (arr) => {
  console.log(arr[0].currentTarget.dataset.name)
  if (arr[0].currentTarget.dataset.name === arr[1].currentTarget.dataset.name && 
    arr[0].target.x + arr[0].target.y !== arr[1].target.x + arr[1].target.y) 
    {
    arr.forEach((pic) => {
      console.log(pic)
      pic.target.className = 'invisible';
    });
    pickArray.splice(0, 2);
  }
  pickArray.splice(0, 2);
};

const action = (event) => {
  pickArray.push(event);
  if (pickArray.length === 2) {
    bingoCheck(pickArray);
  }
};

export default action;
