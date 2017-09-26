function findMinAndRemove(array){
  var min = array[0]
  var minIndex = 0
  for(var i = 1, n = array.length; i < n; i++){
    if (array[i] < min){
      min = array[i]
      minIndex = i
    }
  }
  return array.splice(minIndex,1)[0]
}

function insertionSort(array){
  var sortedArray = []
  while(array.length){
    sortedArray.push(findMinAndRemove(array))
  }
  return sortedArray
}
