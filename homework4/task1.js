// task1 (hw4)

function createDebounceFunction(f, delay) {
     return function() {
          clearTimeout(this)
          setTimeout(f, delay)
     }   
}

// Вывод в консоли значения 100 примерно через 1000мс + 200мс + 200мс:
// const log100 = () => console.log(100)
// const debounceLog100 = createDebounceFunction(log100, 1000);
// debounceLog100()
// setTimeout(debounceLog100, 200)
// setTimeout(debounceLog100, 400)

