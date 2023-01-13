const object = { a: 1, b: 2, c: 3 } 

// In operator 
for(let key in object) {
    console.log(key);
}

//Object constructor
console.log( Object.keys(object) ); // ['a', 'b', 'c']
console.log( Object.values(object) ); // [1, 2, 3]