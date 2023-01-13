function sum() {
    return this.a + this.b;
}
//  The first argument we pass to call becomes this inside the function
const result = sum.call({ a: 2, b: 4 });
console.log(result); // 6 

function thisName() {
    return this.name;
}

const newFunction = thisName.bind({ name: 'Ted' }); 

console.log(newFunction()); // Ted
