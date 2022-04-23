//JS HomeWork-1 Task #1

let a = Number(prompt('Введите первое число'))
let b = Number(prompt('Введите систему счисления для числа'))
if (!Number.isInteger(a) || !Number.isInteger(b) || b < 2 || b > 36) {
    alert('Некорректный ввод!')
}
else {
    alert(`Ответ: число ${a} в ${b}-ой системе счисления = ${a.toString(b)}`)
}