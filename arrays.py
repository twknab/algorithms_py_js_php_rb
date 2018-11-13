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

