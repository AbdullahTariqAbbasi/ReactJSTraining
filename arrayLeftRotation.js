function leftRotate(rot, arr) {
    while(rot > 0) {
        const firstElement = arr.shift();
        arr.push(firstElement);
        rot--;
    }
    return arr;
}

console.log(leftRotate(2,[1,2,3,4,5]))
console.log(leftRotate(3,[5,4,3,2,1]))