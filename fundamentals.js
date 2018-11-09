// 1. Sigma
function sigma(val) {
  let sum = 0;
  if (val < 1) {
    console.log("Value provided must be a positive number.");
    return false;
  }
  for (let i = 1; i <= val; i++) {
    sum += val;
  }
  console.log(sum);
  return sum;
}
sigma(3);
sigma(1);
sigma(-1);
sigma(10);

// 2. Factorial
function factorial(val) {
  let product = 1;
  if (val < 1) {
    console.log("Value must be greater than 0.");
    return false;
  }
  for (let i = 1; i <= val; i++) {
    product *= i;
  }
  console.log(product);
  return product;
}
factorial(3);
factorial(5);
factorial(0);

// 3. Threes and Fives
function threesAndFives() {
  for (let i = 100; i <= 4000000; i++) {
    if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
      console.log(i);
    }
  }
}
// threesAndFives();

// 4. FizzBuzz
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && !(i % 5 === 0)) {
      console.log("fizz");
    }
    if (i % 5 === 0 && !(i % 3 === 0)) {
      console.log("buzz");
    }
    if ((i % 5 === 0) && (i % 3 === 0)) {
      console.log("fizz-buzz");
    }
  }
}
fizzBuzz();