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

# 5. Is Prime
def is_prime(num):
  if num % num == 0 and num % 1 == 0:
    print(True)
    return True
  else:
    print(False)
    return False
is_prime(1)
is_prime(2)
is_prime(2.5)

# 6. Sum to One Digit
def sum_to_one_digit(num):
  # Edge case checks:
  if num < 1:
    print("Num must be a positive integer")
    return False
  if type(num) is not int:
    print("Sorry, Num must be a positive integer")
    return False
  
  def get_sum(integer):
    # Initialize sum as 0
    sum = 0 
    # Convert integer to string
    integer = str(integer)
    # Iterate over each integer and sum
    for x in integer:
      sum += int(x)
    print("Sum so far: {}".format(sum))
    return sum
  
  '''
  Get sum of all integers in num provided. While the number of digits in the sum is greater than 1 digit, continue summing each integer, until the sum finally reaches 1 digit
  '''

  sum = get_sum(num)
  while len(str(sum)) > 1:
    sum = get_sum(sum)

  print(sum)
  return sum
sum_to_one_digit(928)
sum_to_one_digit(1.5)
sum_to_one_digit(-1.5)
sum_to_one_digit(399)
