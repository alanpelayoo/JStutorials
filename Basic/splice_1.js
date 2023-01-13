/* const array = [1,2,3];
for(let i = 0; i < array.length; i++) {
    if(array[i] > 1) {
        array.splice(i, 1);
    }
}
console.log(array); // [1, 3] */
//  Use this ↓

const array = [1,2,3];
for(let i = array.length - 1; i >= 0; i--) {
    if(array[i] > 1) {
        array.splice(i, 1);
    }
}
console.log(array); // [1]