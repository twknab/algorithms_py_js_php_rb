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

// 3. Insert At:
function insertAt(arr, idx, val) {
  if (arr.length < 1) {
    arr = Array(idx + 1).fill(undefined);
    arr[idx] = val;
    console.log(arr);
    return arr;
  }
  if (idx < 0) {
    console.log("Index must be positive");
    return false;
  }
  let i = arr.length;
  arr[i] = undefined;
  while (i > idx) {
    arr[i] = arr[i - 1];
    i--;
  }
  arr[i] = val;
  console.log(arr);
  return arr;
}
insertAt([], 9, 9);
insertAt([1, 2, 3], 1, 9);
insertAt([1, 2, 3], -1, 19);
insertAt([1, 2, 3, 4, 5, 6, 7], 4, 20);
insertAt([1,2,3,4,5], 0, "X");