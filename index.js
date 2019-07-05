function findMinAndRemove(array){
  let minIndex = 0
  let min = array[minIndex]
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i]
      minIndex = i
    }
  }
  array.splice(minIndex, 1)
  return min
}

function insertionSort(array){
  const sorted = []
  while (array.length > 0) {
    sorted.push(findMinAndRemove(array))
  }
  return sorted
}
