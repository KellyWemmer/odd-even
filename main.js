function evenOrOdd(num) {
    if (num % 2 == 0) {
        console.log("even")
        return 'even' //stops code and returns to who asks for it
    } else
        console.log("odd")
        return 'odd'
}
let fortyEight = evenOrOdd(48)
console.log('result', fortyEight)

console.log(evenOrOdd(2))
console.log(evenOrOdd(3))
console.log(evenOrOdd(0))
console.log(evenOrOdd(-2))
console.log(evenOrOdd(-1))