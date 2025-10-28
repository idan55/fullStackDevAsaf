// let arr = []
// let count = 0
// for(let i = 0; i<20; i++){
//     let num = Math.floor(Math.random()*200)+1
//     if(num % 2 != 0){
//         arr.push(num)
//         count++
//     }
// }
// console.log(arr,count)






let arr = []
let countOdd = 0
for(let i = 0; i<20; i++){
    let num = Math.floor(Math.random()*200) + 1
    arr.push(num)
    if(num % 2 != 0){
        countOdd++
    }
}
// console.log(arr)
console.log(countOdd)
