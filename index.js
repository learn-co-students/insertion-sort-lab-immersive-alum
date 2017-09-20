function findMinAndRemove(array){
  let min = array[0];
  let index = 0;
    for (var i = 0; i < array.length; i++){
      let current = array[i]
      if (array[i] < min){
        min = array[i]
        index = i
      }
    }
   array.splice(index, 1)
   return min;
}

function insertionSort(array){
  let sorted = [];
  let min;
    while (array.length !== 0){
      min = findMinAndRemove(array)
      sorted.push(min)
    }
    return sorted
}
