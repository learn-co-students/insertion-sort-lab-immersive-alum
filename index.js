function findMinAndRemove(array){
  let smallest = array[0]
  let smallestIndex = 0
  array.forEach((item, index) => {
    if(smallest > item){
      smallest = item
      smallestIndex = index
    }
  })
  array.splice(smallestIndex, 1)
  return smallest
}

function insertionSort(array){
  let sortedArr = []
  let minVal;
  while(array.length != 0){
    minVal = findMinAndRemove(array)
    sortedArr.push(minVal)
  }
  return sortedArr
}
