const BinarySearch = (array, item, begin, end) => {
  // Invalid array
  if (begin > end) return null

  let mid_index = Math.trunc((begin + end) / 2)

  if (array[mid_index] == item) return mid_index

  if (item > array[mid_index]) return BinarySearch(array, item, mid_index + 1, end)

  if (item < array[mid_index]) return BinarySearch(array, item, begin, mid_index - 1)
}