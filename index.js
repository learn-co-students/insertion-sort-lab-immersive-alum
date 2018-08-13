// Begin by implementing a function to find the minimum in an array
// and remove that element.

function findMinAndRemove(array){
  // return "ok"
  let minIndex = 0
  for(let i=1;i<array.length;i++){
    if(array[minIndex] > array[i]) { minIndex=i}
  }
  return array.splice(minIndex,1)[0]
}

// console.log(findMinAndRemove([3, 2, 4, 5, 6, 7]));


// Move on to implement the insertion sort function,
// and call on the minAndRemove function in its implementation.
let unsorted = [12, 10, 9, 14, 1, 3, 5, 11, 6, 15, 16, 13, 2, 4, 8, 7]


function insertionSort(array){ //take in an unsorted array
  let sorted = []
  while(array.length > 0){
    //call findMinAndRemove to find smallest
    //add smalled to end of new sorted array
    sorted.push(findMinAndRemove(array))
  }
  //return a sorted array
  return sorted
}
