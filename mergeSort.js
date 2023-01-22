function mergeArray(left, right) {
    const arr = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        arr.push(left.shift());
      } else {
          arr.push(right.shift());
      }
    }
    return [...arr, ...left, ...right];
}

function mergeSort(arr) {
    if (arr.length === 1) {
      return arr;
    }
    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center);
    const right = arr.slice(center); 
    return mergeArray(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([30,4,11,-2,0,1]))