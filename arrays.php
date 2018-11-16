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