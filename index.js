function findMinAndRemove(array){
  array = array.sort((a, b) => {
    return a - b;
  });
  return array.shift();
}

function insertionSort(array){
  let sortedArray = [];
  let min;

  while(array.length > 0){
    min = findMinAndRemove(array);
    sortedArray.push(min);
  }
  return sortedArray;
}
