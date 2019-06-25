function findMinAndRemove(array){
  let min = array [0]
  let minNum = 0
  for(let i = 0; i < array.length; i++) {
    let element = array[i]
    if (array[i] < min) {
      min = array[i]
      minNum = i
    }
  }
 array.splice(minNum, 1);
 return min;
}

function insertionSort(array){
     let newMin;
     let sorted = []
     while(array.length != 0){
       newMin = findMinAndRemove(array)
       sorted.push(newMin)
     }
     return sorted;
   }
