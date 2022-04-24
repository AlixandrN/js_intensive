// Task3
const myIterable = {
    from: 1,
    to: 4,

[Symbol.iterator] () {
    if (this.to < this.from) {throw new Error('"to" must be bigger then or equal to "from"')};
    if (!this.from) {throw new Error ('Enter the property "from" please')};
    if (!this.to) {throw new Error ('Enter the property "to" please')};
    if (typeof this.from != 'number' || typeof this.to != 'number') {
        throw new Error ('properties must be "numbers"!')};
    
    this.current = this.from; return this;
},

next() {
   if(this.current <= this.to) {
return {done: false, value: this.current++,}
   }
   else return {done: true}
}
}

