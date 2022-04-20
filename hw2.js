//JS HomeWork-1 Task #2
let a = Number(prompt('Введите первое число'))
if (!Number.isInteger(a)) {alert('Некорректный ввод!')}
else {
    let b = Number(prompt('Введите второе число'))
    if (!Number.isInteger(b)) {alert('Некорректный ввод!')}
    else {
        if (b === 0) {alert(`Ответ: ${a+b}, на 0 делить нельзя`)}
        else {alert(`Ответ: ${a+b}, ${a/b}`)}
    }
}
