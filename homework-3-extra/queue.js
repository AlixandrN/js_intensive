//Queue
class Queue {
    constructor() {
      this.arr = []
    }
  
    getUnderlyingList() {
      let obj = {}
      obj.value = this.arr[0]
      if (this.arr[1] == undefined) {obj.next = null; return obj}
      else {
        let ob = {}
        ob.value = this.arr.shift()
        ob.next = this.getUnderlyingList(this.arr)
        return ob
      }
    }
  
    enqueue(value) {
      this.arr.push(value)
    }
  
    dequeue() { 
      return this.arr.shift()
    }
  
  }