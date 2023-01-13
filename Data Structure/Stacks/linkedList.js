class LinkedList {
    constructor(){
        this.head = null
    }

    addFirst(node){
        if (this.head){
            node.next = this.head
        }
        this.head = node
    }

    addLast(node){
        if (this.head){
            let temp = this.head;

            while(temp.next){
                temp = temp.next;
            }
            temp.next = node
        }else{
            this.head = node
        }
    }

    indexOf(node){
        let ref = this.head;
        let i = 0;

        while(ref){
            
            if (ref === node){
                return i
            }
            ref = ref.next
            i += 1;
        }
        return -1
    }
    removeAt(index){
        if (index === 0){
            this.head = this.head.next
            return
        }
        let idx = 0;
        let node = this.head;

        while(idx < (index - 1)){
            node = node.next;
            idx++;
        }
        node.next = node.next.next
    }
}
const Node = require('./node');

const node1 = new Node(4);
const node2 = new Node(3);
const node3 = new Node(2);
const linkedList = new LinkedList();

linkedList.addLast(node1); // node1 
linkedList.addLast(node2); // node1 --> node2
linkedList.addLast(node3); // node1 --> node2

console.log(linkedList)

