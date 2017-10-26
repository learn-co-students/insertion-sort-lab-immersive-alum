function findMinAndRemove(array){
  let min = array[0]
  let minIdx = 0
  for (let i = 0; i < array.length; i++) {
    let temp = array[i]
    if (array[i] < min) {
      min = array[i]
      minIdx = i
    }
  }
  array.splice(minIdx, 1)
  return min
}

function insertionSort(array){
  let min
  let sortArr = []
  while (array.length != 0) {
    min = findMinAndRemove(array)
    sortArr.push(min)
  }
  return sortArr
}