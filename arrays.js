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
  // Note: I know this is a long winded solution was just trying something with while loops.
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

// 4. RemoveAt
function removeAt(arr, idx) {
  if (arr.length < 1 || idx < 0) {
    console.log("Array cannot be empty and index must not be negative.");
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (i === idx) {
      console.log(arr[i]);
      return arr[i];
    }
  }
  console.log("Index value not present in array");
  return false;
}
removeAt([1,2,3,4], 10);
removeAt([1,2,3,4], -10);
removeAt([1,2,3,4], 0);
removeAt([1,2,3,4], 2);

// 5. FilterRange
function filterRange(arr, min, max) {
  // Check if array is empty
  if (arr.length < 1) {
    console.log("Array cannot be empty");
    return false;
  }
  // Check if proper types for min and max
  if (typeof(min) !== "number" || typeof(max) !== "number" || min % 1 !== 0 || max %1 !== 0) {
    console.log("Min and max variables must be an integer");
    return false;
  }
  // Loop backwars through array removing any values found within min and max range, while also returning false for entire algorithm if any non number types are found
  for (let i = arr.length - 1; i >= 0; i--) {
    // Check if iterated value is a number and integer only
    if (typeof(arr[i]) !== "number" || arr[i] % 1 !== 0) {
      console.log("Array may only contain integers");
      return false;
    }
    if (arr[i] >= min && arr[i] <= max) {
      arr.splice(i, 1);
    }
  }
  // Print and return array:
  console.log(arr);
  // console.log(arr.length);
  return arr;
}
filterRange([1, 2, 3, 4, 5], 2, 4);
filterRange([1, 2, 3, 4, "Chiken"], 2, 4);
// filterRange([1, 2, 3, 4, ""], 2, 4);
filterRange([], 2, 4);
filterRange([1.2], 2, 4);
filterRange([-10, -10000, 500, 3, 1000, 1010, 4], 2, 4);
filterRange([-10, -10000, 500, 3, 0, 1000, 1010, 4], -10, 4);
filterRange([-10, -10000, 500, 3, 0, 1000, 1010, 4], -10, 4.2);

function concat(arr1, arr2) {
  // Create empty array which we'll return with our arrays concatted
  let concatted = [];
  // If non-arrays are supplied as arguments return false
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    console.log("Arrays are only acceptable argument types");
    return false;
  }
  // Loop through array 1 and push values to concatted
  for (let i = 0; i < arr1.length; i++) {
    concatted.push(arr1[i]);
  }
  // Loop through array2 and push values to concatted
  for (let i = 0; i < arr2.length; i++) {
    concatted.push(arr2[i]);
  }
  // Log and return concatted array
  console.log(concatted);
  return concatted;
}
concat(['a', 'b'], [1, 2]);
concat([], [1, 2]);
concat(['a', 'b'], []);
concat('a', []);
concat([], 'b');
concat([1, 2, 3, 4, 5], ['a', 'b', 'c', 'd']);