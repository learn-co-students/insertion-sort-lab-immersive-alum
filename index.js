function findMinAndRemove(array){
  let min = array[0]
  for (let num of array) {
    if (num < min) {
      min = num
    }
  }
  array.splice(array.indexOf(min), 1)
  return min
}

function insertionSort(array){
  let newArr = []
  while (array.length > 0) {
    newArr.push(findMinAndRemove(array))
  }
  return newArr
}
