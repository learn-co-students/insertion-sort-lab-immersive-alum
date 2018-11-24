function findMinAndRemove(array){
  let min = array[0]
  let index

  if (array.length === 1) {
    array.splice(0, 1)
    return min
  }

  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i]
      index = i
    }
  }
  array.splice(index, 1)
  return min
}

function insertionSort(array){
  const sorted = []

  while (array.length > 0) {
    let minValue = findMinAndRemove(array)
    sorted.push(minValue)
  }
  return sorted
}
