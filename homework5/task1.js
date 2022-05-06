// Task1 HW5
// Создать класс Calculator. Конструктор класса должен принимать два валидных числа,
// иначе (если параметра не два или хотя бы один из них невалидный number)
//  бросать ошибку (throw new Error('')). Данный класс должен иметь методы setX, setY, logSum, logMul, 
//logSub, logDiv.
// - setX(num) - задаёт первому из чисел новое значение. Кидать ошибку если параметр не передан или 
//является невалидным числом;
// - setY(num) - задаёт второму из чисел новое значение. Кидать ошибку если параметр не передан или
// является невалидным числом;
// - logSum() - выводит в консоль сумму двух наших чисел внутри класса;
// - logMul() - выводит в консоль произведение двух наших чисел внутри класса;
// - logSub() - выводит в консоль разность двух наших чисел внутри класса;
// - logDiv() - выводит в консоль частное двух наших чисел внутри класса ИЛИ кидает ошибку, если второе число (Y)
//  равняется нулю.

class Calculator {
    constructor(x, y) {this.x = x; this.y = y}
   
get x() {return this._x};
get y() {return this._y};

set x(value) {
    if(value === undefined || !Number.isInteger(value)) {throw new Error('incorrect input parameters!');}
    else {this._x = value}
} 
set y(value) {
    if(value === undefined || !Number.isInteger(value)) {throw new Error('incorrect input parameters!');}
    else {this._y = value}
} 

setX(num) {
    if(num === undefined || !Number.isInteger(num)) {throw new Error('incorrect input parameter "X"');}
    else {this.x = num}
}
setY(num) {
    if(num === undefined || !Number.isInteger(num)) {throw new Error('incorrect input parameter "Y"');}
    else {this.y = num}
}
logSum() {console.log(`Sum "X" and "Y" is ${this.x + this.y}`)}
logMul() {console.log(`Multiplication "X" and "Y" is ${this.x * this.y}`)}
logSub() {console.log(`Subtraction "X" and "Y" is ${this.x - this.y}`)}
logDiv() {
    if (this.y === 0) {throw new Error('"Y" cannot be equal to "0"!')}
    else {console.log(`The result of dividing "X" by "Y" is ${this.x / this.y}`)}
}
}

// let w = new Calculator(1,2)
// w.setX(6) 
// w.setY(3)
// w.logSum() //9
// w.logMul() //18
// w.logSub() //3
// w.logDiv() // 2
// console.log(w.x, w.y) // 6 3