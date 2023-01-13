const numbers = [-1,-2,-4,2]

const result = numbers.reduce((accumulator, currentValue) => {
    console.log(` Acc ${accumulator} CV ${currentValue}`)
    return  accumulator > currentValue ? accumulator : currentValue
},1);

console.log(result)


//Example Diff
const foods = [
    { food: 'apple', type: 'fruit' }, 
    { food: 'orange', type: 'fruit' }, 
    { food: 'carrot', type: 'vegetable' }
]
const new_objt = foods.reduce( (acc,obj) =>{
    if(acc[obj.type]){
        acc[obj.type].push(obj.food)
    }else{
        acc[obj.type] = []
        acc[obj.type].push(obj.food)
    }
    return acc
}, {}) 

console.log(new_objt) // { fruit: [ 'apple', 'orange' ], vegetable: [ 'carrot' ] }