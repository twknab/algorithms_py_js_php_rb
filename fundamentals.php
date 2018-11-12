<?php
// 1. Sigma
function sigma($val) {
  $sum = 0;
  if ($val < 1) {
    echo("Value provided must be a positive number." . "\n");
    return FALSE;
  }
  foreach (range(1, $val) as $num) {
    $sum += $num;
  }
  echo($sum . "\n");
  return $sum;
}
sigma(3);
sigma(1);
sigma(-1);
sigma(10);

// 2. Factorial
function factorial($val) {
  $product = 1;
  if ($val < 1) {
    echo "Value must be greater than 0." . "\n";
    return FALSE;
  }
  foreach (range(1, $val) as $num) {
    $product *= $num;
  }
  echo $product . "\n";
  return $product;
}
factorial(3);
factorial(5);
factorial(0);

// 3. Threes and Fives
function threes_and_fives() {
  foreach (range(100, 4000) as $val)
    if ($val % 3 == 0 XOR $val % 5 == 0) {
      echo $val . "\n";
    }
}
// threes_and_fives();

// 4. FizzBuzz
function fizz_buzz() {
  foreach (range(1, 100) as $val) {
    if (($val % 3 == 0) AND !($val % 5 == 0)) {
      echo "fizz" . "\n";
    }
    if (($val % 5 == 0) AND !($val % 3 == 0)) {
      echo "buzz" . "\n";
    }
    if (($val % 3 == 0) AND ($val % 5 == 0)) {
      echo "fizz-buzz" . "\n";
    }
  }
}
fizz_buzz();

// 5. Is Prime
function is_prime($num) {
  if ($num % $num == 0 AND $num % 1 == 0) {
    echo "TRUE" . "\n";
    return TRUE;
  }
  else {
    echo "FALSE" . "\n";
    return FALSE;
  }
}
is_prime(1);
is_prime(2);
is_prime(3);
is_prime(4.5);

// 6. Sum to One Digit
function sum_to_one_digit($num) {
  if ($num < 1) {
    echo "Num must be a positive integer" . "\n";
    return FALSE;
  }
  if (!(filter_var($num, FILTER_VALIDATE_INT))) {
    echo "Num must be an integer (no float, etc)" . "\n";
    return FALSE;
  }
  /*
  Note that in PHP, nesting a new function within an existing one still adds the new function to the global scope. Therfor, we use an anonymous function below (stored as a $variable). Note that when we call this function, we must use the dollar sign ($).
  */
  $get_sum = function ($integer) {
    $digit_sum = 0;
    $integer = strval($integer);
    for ($i = 0; $i < strlen($integer); $i++) {
      $digit_sum += intval($integer[$i]);
    }
    return $digit_sum;
  };

  $sum = $get_sum($num);
  while (strlen(strval($sum)) > 1) {
    $sum = $get_sum($sum);
  }
  echo $sum . "\n";
  return $sum;
}

sum_to_one_digit(928);
sum_to_one_digit(1.5);
sum_to_one_digit(-1.5);
sum_to_one_digit(399);