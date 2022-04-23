// Task2
function selectFromInterval (arr, a, b) {
if (!Array.isArray(arr)) {throw new Error('first parameter must be an array!')};
if (!(arr.every(el => typeof el === 'number'))) {
    throw new Error('There are not only numbers in the array!')
};
if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error('incorrect input parameters!') 
};

let min, max;
if (a < b) {min = a; max = b}
else {min = b; max = a}

let rezArr = arr.sort().filter(el => {
    if(el >= min && el <= max) {return true}
})
return rezArr
}

