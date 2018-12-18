function findMinAndRemove(array){
  let minEle = array[0]
  let minEleIdx = 0
  for (let i=0; i<array.length; i++){
    if(array[i] < minEle){
      minEle = array[i]
      minEleIdx = i
    }
  }
  array.splice(minEleIdx, 1)
  return minEle
}

function insertionSort(array){ //it's still selection sort with space complexity of O(n)
  let resultArray = []
  while(array.length){
    resultArray.push(findMinAndRemove(array))
  }
  return resultArray
}
