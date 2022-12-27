let teste = [9, 4, 8, 5, 1]

const swapArray = (array, n1, n2) => {
  let aux = array[n1]
  array[n1] = array[n2]
  array[n2] = aux
}

const findLowerValueIndex = (avaliable_position, array) => {
  let min_index = avaliable_position;

  for (let index = avaliable_position + 1; index < array.length; index++) {
    if (array[index] < array[min_index]) min_index = index
  }

  return min_index
}

const sortArray = (array) => {
  for (avaliable_position = 0; avaliable_position < array.length; avaliable_position++) {
    let lower_index = findLowerValueIndex(avaliable_position, array)
    swapArray(array, avaliable_position, lower_index)
  }
}

