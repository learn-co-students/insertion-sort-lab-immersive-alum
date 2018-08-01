function findMinAndRemove(array){
  let currentMin = array[0]
  array.forEach((element)=>{
    if (element < currentMin){
      currentMin = element
    }
  })
  // console.log(currentMin);
  // console.log(array.slice(array.indexOf(currentMin), array.indexOf(currentMin+1)));
  // let minimum = array.slice(array.indexOf(currentMin), array.indexOf(currentMin)+1)[0]
  array.splice(array.indexOf(currentMin), 1)
  return currentMin
  // let returnObj = [minimum, newArray]
}

function insertionSort(array){
  let newArray = []
  let length = array.length
  for(let i = 0; i < length; i++){
    newArray.push(findMinAndRemove(array))
    // array = [...array.slice(0, array.indexOf(findMinAndRemove(array))), ...array.slice(array.indexOf(findMinAndRemove(array))+1)]
  }
  return newArray
}
