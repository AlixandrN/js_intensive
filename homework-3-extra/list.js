// list

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    append(data) { //в конец списка 
        // const node = {data, next: null}
        const node = new Node(data)
        if (this.tail) {this.tail.next = node}
        if(!this.head) {this.head = node}
        this.tail = node
    }
    prepend(data) {//в начало списка 
        const node = new Node(data)
        if(!this.tail) {this.tail = node}
        let a = this.head
        this.head = node 
        this.head.next = a
    }
    howLong() {
        let current = this.head
        let length = 0
        while(current) {
            current = current.next
            length++
        }
        return length
    }
    toArray() {
        let arr = []
        if (this.head) {
            arr.push(this.head)
            let current = this.head 
            while (current.next) {
                arr.push(current.next)
                current = current.next
            }
        } 
        return arr
    }
    findIndex(a) {
        let index = 0
        let current = this.head
        while(current) {
            index++
            if(current.value === a) {return index}
            current = current.next
        }
        return null
    }
    findElement(a) {
        let current = this.head
        while(current) {
            if(current.value === a) {return current}
            current = current.next
        }
        return null
    }
    insertAfter(a, data) {
        let current = this.findElement(a)
        let node = new Node(data)
        node.next = current.next
        current.next = node
    }
    deleteElement(a) {

        while(this.head && this.head.value === a) {
            this.head = this.head.next
        }
        let current = this.head  
        
        while(current.next) {
            if (current.next.value === a) {
                console.log('have fond it!') 
                current.next = current.next.next
            } else {
                current = current.next
            }
        }
        if (this.tail.value === a) {this.tail = current}
    }
}