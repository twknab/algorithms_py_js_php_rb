# 1. Sigma
def sigma(val)
  sum = 0
  if val < 1
    puts "Value provided must be a positive number."
    return false
  end
  for i in 1..val
    sum += i
  end
  puts sum
  return sum
end
sigma(3)
sigma(1)
sigma(-1)
sigma(10)

# 2. Factorials
def factorial val
  product = 1
  if val < 1
    puts "Value must be greater than 0."
    return false
  end
  for i in 1..val
    product *= i
  end
  puts product
  return product
end
factorial 3 # cool way to invoke a function with ruby
factorial 5
factorial 0

# 3. Threes and Fives
def threes_and_fives
  for i in 100..4000000
    if (i % 3 == 0 and not i % 5 == 0) or (i % 5 == 0 and not i % 3)
      puts i
    end
  end
end
# threes_and_fives

# 4. FizzBuzz
def fizz_buzz()
  for i in 1..100
    if (i % 3 == 0 and not i % 5 == 0)
      puts "fizz"
    end
    if (i % 5 == 0 and not i % 3 == 0)
      puts "buzz"
    end
    if (i % 3 == 0 and i % 5 == 0)
      puts "fizz-buzz"
    end
  end
end
fizz_buzz

# 5. IsPrime
def is_prime(num)
  if (num % num == 0 && num % 1 == 0)
    puts true
    return true
  else
    puts false
    return false
  end
end
is_prime(1)
is_prime(2)
is_prime(3)
is_prime(4.5)

# 6. Sum to One Digit
def sum_to_one_digit(num)
  if num < 1 or not num.is_a? Integer
    puts "Num must be positive integer"
    return false;
  end

  get_sum = ->(intgr) {
    digit_sum = 0
    intgr = intgr.to_s.split('')
    intgr.each do |i|
      digit_sum += i.to_i
    end
    return digit_sum
  }

  sum = get_sum.call(num)
  while sum.to_s.length > 1 do
    sum = get_sum.call(sum)
  end

  puts sum
  return sum
end
sum_to_one_digit 928
sum_to_one_digit(1.5);
sum_to_one_digit(-1.5);
sum_to_one_digit(399);