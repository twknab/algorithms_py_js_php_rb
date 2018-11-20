<?php
// 1. Push Front
function push_front($arr, $val) {
  $i = sizeof($arr);
  if ($i < 1) {
    $arr = [$val];
    var_dump($arr);
    return $arr;
  }

  while ($i > 0) {
    $arr[$i] = $arr[$i - 1];
    $i--;
  }
  $arr[$i] = $val;
  var_dump($arr);
  return $arr;
}
push_front([1,2,3], 9);
push_front([], 1);
push_front([1], 2);

// 2. Pop Front
function pop_front($arr) {
  if (sizeof($arr) < 1) {
    echo "This array is empty" . "\n";
    return FALSE;
  }
  echo $arr[0] . "\n";
  return $arr[0];
}
pop_front([]);
pop_front([1,2,3]);

// 3. Insert At:
function insert_at($arr, $idx, $val) {
  // Note: I know this is a long winded solution was just trying something with while loops.
  // If array is empty, create null values and add val to idx
  if (sizeof($arr) < 1) {
    $arr = array_fill(0, $idx + 1, NULL);
    $arr[$idx] = $val;
    var_dump($arr);
    return $arr;
  }
  // If idx negative send False
  if ($idx < 0) {
    echo "Index value must be positive." . "\n";
    return FALSE;
  }
  // Store length of array and extend it:
  $i = sizeof($arr);
  $arr[$i] = NONE;
  // Move all values forwards until idx is reached:
  while ($i > $idx) {
    $arr[$i] = $arr[$i - 1];
    $i--;
  }
  $arr[$i] = $val;
  var_dump($arr);
  return $arr;
}
insert_at([], 9, 9);
insert_at([1,2,3], 1, 9);
insert_at([1, 2, 3], -1, 19);
insert_at([1, 2, 3, 4, 5, 6, 7], 4, 20);

// 4. Remove At:
function remove_at($arr, $idx) {
  if (sizeof($arr) < 1 || $idx < 0) {
    echo "Array must not be empty and Index value must not be negative"  . "\n";
    return FALSE;
  }
  for ($i = 0; $i < sizeof($arr); $i++) {
    if ($i == $idx) {
      echo $arr[$i] . "\n";
      return $arr[$i];
    }
  }
  echo "Index does not exist in array"  . "\n";
  return FALSE;
}
remove_at([], 10);
remove_at([1,2,3], 10);
remove_at([1,2,3], 2);
remove_at([1,2,3], 0);
remove_at([1,2,3], -10);

// 5. Filter Range
function filter_range($arr, $min, $max) {
  // Ensure array provided is not empty, return false if so:
  if (sizeof($arr) < 1) {
    echo "Array must not be empty" . "\n";
    return FALSE;
  }
  // Check if min or max are not integers, return false if so:
  if (gettype($min) !== "integer" || gettype($max) !== "integer" ) {
    echo "Min and Max values must be integers only" . "\n";
    return FALSE;
  }
  // Loop backwards through array, if any non-integer items are found return false. If any values between min and max (inclusive) are found, remove them from the array:
  for ($i = sizeof($arr) - 1; $i >= 0; $i--) {
    if (gettype($arr[$i]) !== "integer") {
      echo "Array must contain integers only" . "\n";
      return FALSE;
    }
    if ($arr[$i] >= $min && $arr[$i] <= $max) {
      unset($arr[$i]);
    }
  }
  // Print and return the array:
  var_dump($arr);
  return $arr;
}
filter_range([1, 2, 3, 4, 5], 2, 4);
filter_range([1, 2, 3, 4, "Chiken"], 2, 4);
filter_range([], 2, 4);
filter_range([1.2], 2, 4);
filter_range([-10, -10000, 500, 3, 1000, 1010, 4], 2, 4);
filter_range([-10, -10000, 500, 3, 0, 1000, 1010, 4], -10, 4);

// 6. Concat
function concat($arr1, $arr2) {
  $concatted = [];
  if (gettype($arr1) !== "array" || gettype($arr2) !== "array") {
    echo "Arrays are only arguments accepted" . "\n";
    return FALSE;
  }
  foreach ($arr1 as $val) {
    $concatted[] = $val;
  }
  foreach ($arr2 as $val) {
    $concatted[] = $val;
  }
  var_dump($concatted);
  return $concatted;
}
concat(['a', 'b'], [1, 2]);
concat([], [1, 2]);
concat(['a', 'b'], []);
concat('a', []);
concat([], 'b');
concat([1, 2, 3, 4, 5], ['a', 'b', 'c', 'd']);