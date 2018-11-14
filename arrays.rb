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