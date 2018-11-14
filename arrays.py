# 1. Push Front
def push_front(arr, val):
  # Jf array is empty set array as value
  if len(arr) < 1:
    arr = [val]
    print(arr)
    return arr

  # Extend array with last index value, and then loop backwards moving values to forward an index. When complete, add new value to first index of array.
  i = len(arr)-1
  arr.append(arr[i])
  while i > 0:
    arr[i] = arr[i - 1]
    i -= 1
  arr[i] = val
  print(arr)
  return arr
push_front([1,2,3], 9)
push_front([], 1)
push_front([1], 2)

# 2. Pop Front
def pop_front(arr):
  if len(arr) < 1:
    print("This array is empty")
    return False
  print(arr[0])
  return arr[0]
pop_front([])
pop_front([1,2,3])

# 3. Insert At
def insert_at(arr, idx, val):
  # If array is empty create a bunch of None values to the desired index provided:
  if len(arr) < 1:
    arr = [None] * (idx + 1)
    arr[idx] = val
    print(arr)
    return arr
  # Simplify our algorithm by not accepting negative numbers (as in Python we can use negative indices):
  if idx < 0:
    print("Index must be 0 or greater")
    return False
  # Store length of array and extend it:
  i = len(arr)
  arr.append(None)
  # Move every value forwards until idx is reached:
  while i > idx:
    arr[i] = arr[i - 1]
    i -= 1
  arr[i] = val
  print(arr)
  return arr  
insert_at([], 9, 9)
insert_at([1,2,3], 1, 9)
insert_at([1,2,3], -1, 19)
insert_at([1,2,3,4,5,6,7], 4, 20)

