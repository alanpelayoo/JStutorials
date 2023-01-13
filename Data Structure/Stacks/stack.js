class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        if (this.items.length === 10) {
            throw new Error("Stack Overflow!");
        } 
        this.items.push(item)
    }
    pop() {
        if ( this.isEmpty() ){
            throw new Error("Stack Undererflow!");
        } 
        return this.items.pop()
    }
    isEmpty() {
        if (this.items.length === 0) {
            return true
        }
    }
    peek() {
        return this.items[this.items.length - 1]
    }
}


const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack)

console.log(stack.peek())


