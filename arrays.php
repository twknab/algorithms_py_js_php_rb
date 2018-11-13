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