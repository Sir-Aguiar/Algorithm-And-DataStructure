let teste = [9, 4, 8, 5, 1]

const swapArray = (array, n1, n2) => {
  let aux = array[n1]
  array[n1] = array[n2]
  array[n2] = aux
} 

const SelectionSort = (array) => {

  for (avaliable_position = 0; avaliable_position < array.length; avaliable_position++) {
    let lower_value_index = avaliable_position;

    // Finding the lower value that can be setted on the avaliable position
    for (let index = avaliable_position + 1; index < array.length; index++) {
      if (array[index] < array[lower_value_index]) lower_value_index = index
    }
 
    swapArray(array, avaliable_position, lower_value_index)
  }

}
