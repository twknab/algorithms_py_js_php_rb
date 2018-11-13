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