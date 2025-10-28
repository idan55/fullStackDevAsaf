function factorial (number){
    if (number < 0) return undefined
    let mult = 1
    for(let i = number; i > 1; i --){
        mult *= i
    }
    return mult

}
let start = factorial(4)
console.log(start)