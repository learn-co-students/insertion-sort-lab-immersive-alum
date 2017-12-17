function findMinAndRemove(array){
  let min = array[0]
  let minPos = 0
  for (let i = 0, j = array.length; i < j; i++) {
    if (array[i] < min) {
      min = array[i]
      minPos = i
    }
  }
  array.splice(minPos, 1)
  return min
}

function insertionSort(array){
  let sorted = []
  while (array.length) {
    sorted.push(findMinAndRemove(array))
  }
  return sorted
}
