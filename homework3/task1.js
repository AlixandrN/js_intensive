// task1 

Array.prototype.myFilter = function (f, thisArg) {
let resArr = []
if (thisArg) {
for (let i=0; i<this.length; i++) {if(f.call(thisArg, this[i])) {resArr.push(this[i])}}
}
else {
for (let i=0; i<this.length; i++) {if(f(this[i])) {resArr.push(this[i])}}
}   
return resArr
}