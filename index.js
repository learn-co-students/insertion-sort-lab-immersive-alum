function findMinAndRemove(array){
  let min = array[0]
  let index
  for (let x = 0; x < array.length; x++) {
   if (array[x] < min) {
     min = array[x]
     index = x
   } 
  }
  array.splice(index, 1)
  return min
}

function insertionSort(array){
  let result = []
  while (array.length > 0) {
    result.push(findMinAndRemove(array))
  }
  return result
}

