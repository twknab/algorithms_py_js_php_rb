# 1. Push Front
def push_front arr, val
  i = arr.count
  if arr.empty?
    arr = [val]
    p arr
    return arr
  end
  while i > 0 do
    arr[i] = arr[i - 1]
    i -= 1
  end
  arr[i] = val
  p arr
  return arr
end
push_front([1,2,3], 9)
push_front([], 1)
push_front([1], 2)

# 2. Pop Front
def pop_front arr
  if arr.empty?
    puts "Array is empty"
    return false
  end
  puts arr[0]
  return arr[0]
end
pop_front []
pop_front [1,2,3]

# 3. Insert At
# Note: I know this is a long winded solution was just trying something with while loops.
def insert_at arr, idx, val
  if arr.empty?
    arr = Array.new(idx + 1)
    arr[idx] = val
    p arr
    return arr
  end
  if idx < 0
    puts "Index must be positive value."
    return false
  end
  i = arr.count
  arr[i] = nil
  while i > idx do
    arr[i] = arr[i - 1]
    i -= 1
  end
  arr[i] = val
  p arr
  return arr
end
puts "---"
insert_at([], 1, 1)
insert_at([1, 2, 3], 1, 9)
insert_at([1, 2, 3], -1, 19)
insert_at([1, 2, 3, 4, 5, 6, 7], 4, 20)
insert_at([1,2,3,4,5], 0, "X")

# 4. Remove At
def remove_at arr, idx
  if (arr.count < 1 or idx < 0)
    puts "Array must contain values and index must be positive"
    return false
  end
  arr.each_with_index do |val, i|
    if i === idx
      puts val
      return val
    end
  end
  puts "Index value not found in array"
  return false
end
remove_at([], 5)
remove_at([1,2,3], 5)
remove_at([1,2,3], 0)
remove_at([1,2,3,10,12,15,20,25], 4)
remove_at([1,2,3,10,12,15,20,25], -1)
