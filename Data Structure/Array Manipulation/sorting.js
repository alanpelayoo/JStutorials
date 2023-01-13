// Defaullt sort behaviour, string comparision.
const result = [3, 2, 4, 1].sort();
console.log(result); // [1, 2, 3, 4]

const result2 = ['orange', 'berry', 'apple', 'cherry'].sort();
console.log(result); // ["apple", "berry", "cherry", "orange"]


// Passing function to determine comparision, ascendings

const result3 = [3,20,4,1]
result3.sort(function comparison(a,b) {
    if(a < b) {
        // take a first
        return -1; // a primero
    }
    if(b < a) {
        // take b first
        return 1; // b primero
    }
    // no change is needed
    return 0; // no cambio
});

console.log(result3)

// or, return negative value to return a
[3,2,4,1].sort(function comparison(a,b) {
    return a - b;
});