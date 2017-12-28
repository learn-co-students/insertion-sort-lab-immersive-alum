//loop through array and find the smallest element

function findMinAndRemove(array){
  let min = array[0]
  let minIndex = 0
  for (let i = 0; i < array.length; i++) {
    let currentElement = array[i]
    if (array[i] < min) {
      min = array[i]
      minIndex = i
    }
  }
  array.splice(minIndex, 1);
  return min;
}

//call previous function on array and push each min element into the sorted array in order of min to max

function insertionSort(array){
  let newMin
  let sorted = []
  while (array.length != 0) {
    newMin = findMinAndRemove(array)
    sorted.push(newMin)
  }
  return sorted
}
