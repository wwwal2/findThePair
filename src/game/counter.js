// function counter() {
let count = 0;

function refresh() {
  count = 0;
}

function increase() {
  count += 1;
  return count;
}

export { refresh, increase };
