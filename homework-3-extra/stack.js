//Stack
class Stack {
    constructor() {this.arr = []}
    push(element) {
      this.arr.push(element)
    }
  
    pop() {
      let last = this.arr[this.arr.length - 1]
      this.arr.pop()
      return last
    }
  
    peek() {
      return this.arr[this.arr.length - 1]
    }
  }