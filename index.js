
function findMinAndRemove(array){
  let minNum = array[0]
  let index = 0

  for (var i = 0; i < array.length; i++) {
    if(array[i] < minNum) {
      minNum = array[i]
      index = i
    }
  }
  array.splice(index, 1)
  return minNum
}

function insertionSort(array){
  let newArray = []
  while (array.length !==0) {
    newArray.push(findMinAndRemove(array))
  }
  return newArray
}
