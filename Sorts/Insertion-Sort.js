let test = [7, 1, 2, 5, 7, 0]

const InsertionSort = (array) => {
  for (let i_on_sort = 1; i_on_sort < test.length; i_on_sort++) {
    // Sorting element
    const element = test[i_on_sort]
    let comparation_index = i_on_sort - 1

    // Comparing the current element to the ones at his left
    while (comparation_index >= 0 && element < test[comparation_index]) {
      // Putting the compared element one position ahead
      test[comparation_index + 1] = test[comparation_index]
      comparation_index--
    }
    // As the comparation index was decresead, the past position of the compared element is it + 1
    test[comparation_index + 1] = element
  }
}