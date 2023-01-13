const array = [1, 3, 5];

const result = array.map(function(x) {
    return x * 2;
});

console.log(result); // [2, 6, 10]

//we can also acces the index
[10, 20, 30].map(function(el, i) {
    console.log(el)
    console.log(i);
});