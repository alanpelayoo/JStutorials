const example ={
    prop: {
        prop: {
            prop: 3
        }
    }
}

let temp = example
while( typeof temp === "object"){
    temp = temp.prop
}

console.log(temp)
