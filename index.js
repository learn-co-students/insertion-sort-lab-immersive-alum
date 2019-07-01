function findMinAndRemove(array){
    let min = array[0];
    let minIndx = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] < min){
            min = array[i]
            minIndx = i;
        }
    }
    array.splice(minIndx, 1);
    return min;
}

function insertionSort(array){
    let sortedArray = [];
    let i = 0;
    do {
        let minVal = findMinAndRemove(array)
        sortedArray.push(minVal)
    }while(i < array.length);
    return sortedArray
}
