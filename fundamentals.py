# 1. Sigma
def sigma(val):
  sum = 0
  if val < 1:
    print("Value provided must be a positive number.")
    return False
  for i in range(1, val + 1):
    sum += i
  print(sum)
  return sum
sigma(3)
sigma(1)
sigma(-1)
sigma(10)

# 2. Factorial
def factorial(val):
  product = 1
  if val < 1:
    print("Value must be positive integer")
    return False
  for i in range(1, val + 1):
    product *= i
  print(product)
  return product
factorial(3)
factorial(5)
factorial(0)

# 3. Threes and Fives
def threes_and_fives():
  for i in range (100, 4000001):
    if (i % 3 == 0 or i % 5 == 0) and not (i % 3 == 0 and i % 5 == 0) : print(i)
# Uncomment this to run this function:
# threes_and_fives()

# 4. FizzBuzz
def fizz_buzz():
  for i in range(1, 101):
    if (i % 3 == 0 and not i % 5 == 0):
      print("fizz")
    if (i % 5 == 0 and not i % 3 == 0):
      print("buzz")
    if (i % 3 == 0 and i % 5 == 0):
      print("fizz-buzz")
fizz_buzz()