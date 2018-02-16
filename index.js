// function findMinAndRemove(array) {
//   if (Array.isArray) {
//     let arrayCopy = array;
//
//     if (arrayCopy.length > 1) {
//       arrayCopy[0] > arrayCopy[1]
//         ? arrayCopy.splice(0, 1)
//         : arrayCopy.splice(1, 1);
//       console.log(array);
//       return findMinAndRemove(arrayCopy);
//     } else {
//       return arrayCopy[0];
//     }
//   } else {
//     return "This is not an array!";
//   }
// }

function findMinAndRemove(array) {
  if (Array.isArray) {
    let min = array[0];
    let index = 0;

    for (let i = 0; array.length > i; i++) {
      if (min > array[i]) {
        min = array[i];
        index = i;
      }
    }
    return array.splice(index, 1)[0];
  } else {
    return "This is not an array!";
  }
}
function insertionSort(array) {
  if (Array.isArray) {
    let sorted = [];
    while (array.length) {
      sorted.push(findMinAndRemove(array));
    }
    return sorted;
  } else {
    return "This is not an Array!";
  }
}

// let array = [2, 3, 4, 5, 6, 7];
// console.log(findMinAndRemove(array) == 2);
// console.log(array.includes(2));
