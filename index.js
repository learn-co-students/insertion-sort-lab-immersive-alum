function findMinAndRemove(array){
  //declared and assigned variables outside of closure
  let min = array[0]
  let minIndex = 0

  //iterate to find min
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i]
      minIndex = i
    }
  }

  //remove min from array
  array.splice(minIndex, 1)
  //return min
  return min
}

function insertionSort(array){
  //declared result
  let sortedArr = []

  //keep adding minimum until array is empty
  while (array.length !== 0) {
    sortedArr.push(findMinAndRemove(array))
  }

  return sortedArr
}
