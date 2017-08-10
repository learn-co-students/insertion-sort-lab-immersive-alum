function findMinAndRemove(array){
  let min = array[0]
  let index = 0

  for (var i = 0; i < array.length; i++){
    if (array[i] < min){
      min = array[i]
      index = i
    }
  }
  array.splice(index, 1)
  return min

}

function insertionSort(array){
  let newArr = []
  while (array.length > 0){
    let min = findMinAndRemove(array)
    newArr.push(min)
  }
  return newArr
}
