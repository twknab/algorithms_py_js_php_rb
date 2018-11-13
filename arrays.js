// 1. Push Front
function pushFront(arr, val) {
  let i = arr.length;
  if (i < 1) {
    arr = [val];
    console.log(arr);
    return arr;
  }
  while (i > 0) {
    arr[i] = arr[i - 1];
    i--;
  }
  arr[i] = val;
  console.log(arr);
  return arr;
}
pushFront([1,2,3], 9);
pushFront([], 1);
pushFront([1], 2);