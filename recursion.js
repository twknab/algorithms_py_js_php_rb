// Recursion Exercises
// Recursion occurs when a function calls itself and can be very useful in crafting elegant solutions.

// A good recursive function has 3 parts:

/*
  1. Base Case
    Base cases are when a function can determine (and return) an answer immedietely. Base cases can be positive (matching) or negative (non-matching). E.g, if you successfully guess my number, the recursive calls will stop and a positive base case has been determined. If not, a negative base case has been determined and the function will continue to recursively call itself.

  2. Forward Progress
    A function must move forwards and narrow its range of possibilities.

  3. Calling back to itself as if it was the original problem
    The function will call back to itself, passing along a more narrow range of possibilities.
*/

// 1. Recursive Sigma
function sigma(num, sum=0, counter=1) {
  // edge cases:
  if (num < 1) {
    console.log(0);
    return 0;
  }
  
  // base case:
  if (counter > num) {
    console.log(sum);
    return sum;
  }

  // forward progress:
  sum += counter;
  counter++;

  // recursive call:
  sigma(num, sum, counter);
}
sigma(5);
sigma(2.5);
sigma(-1);
console.log("---");

// 2. Recursive factorial
function factorial(num, product=1, counter=1) {
  // edge case:
  if (num < 1) {
    console.log(1);
    return 1;
  }
  // base case:
  if (counter > num) {
    console.log(product);
    return product;
  }
  // forwards advance:
  product *= counter;
  counter++;
  // recursive call
  factorial(num, product, counter);
}
factorial(3);
factorial(6.5);
factorial(0);
factorial(-1.5);
console.log('---');

// 3. Fibonacci
