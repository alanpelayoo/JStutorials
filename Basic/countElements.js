const elements = ["e", "k", "e", "z", "i", "z"];
let elementCount = {};

for(let i = 0; i < elements.length; i++) {
    if (!elementCount[elements[i]]){
        elementCount[elements[i]] = 1
    }else{
        elementCount[elements[i]] += 1
    }
}
console.log(elementCount)