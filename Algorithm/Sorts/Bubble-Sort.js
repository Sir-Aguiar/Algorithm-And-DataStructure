
const swapArray = (array, n1, n2) => {
  let aux = array[n1]
  array[n1] = array[n2]
  array[n2] = aux
}

const BubbleSort = (array) => {
  for (let interator = 0; interator < array.length; interator++) {
    for (let index = 0; index < array.length; index++) {
      let next = index + 1
      if (array[index] > array[next]) swapArray(array, index, next)
    }
  }
}
