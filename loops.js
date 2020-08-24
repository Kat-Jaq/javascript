// while loops
// while loops run until the expression is false
// is the expression is never false the loop runs for ever
// if the expression is false before the lopp starts the loops is skipped

let count = 15
while (count > 0) {

    console.log(count)
    count--
}

// do loops always execute at least once. The expression is evaluated

let doCount = 30
console.log("start of do")
do {

    console.log(doCount)
    doCount--

} while (doCount < 10)

// for loop
// has 3 parts: initializer, expression, and post process
//
console.log("start of for loop")
for (let count = 0; count < 100; count++){

    if (count == 75){
        break
    }
    console.log(count)

}