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

// 2. Pop Front
function popFront(arr) {
  if (arr.length < 1) {
    console.log("Array is empty");
    return false;
  }
  console.log(arr[0]);
  return arr[0];
}
popFront([]);
popFront([1,2,3]);