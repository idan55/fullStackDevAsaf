// let arr = []
// for(let i = 0; i<15; i++){
//     let num = Math.floor(Math.random()*100)+1
//     if(num>50){
//         arr.push(num)
//     }
// }
// console.log(arr)






// let arr = []
// let count = 0
// for(let i = 0; i < 15; i++){
//     let num = Math.floor(Math.random()*100)+1
//     if(num>50){
//         count++
//         arr.push(num)
//     }
// }
// console.log(count)











let arr = []
let newArr = [] 
sum = 0
for(let i = 0; i < 15; i++){
    number = Math.floor(Math.random()*100)+1
    arr.push(number)
    if(number > 50){
        sum += number
        newArr.push(arr[i])
    }
}
console.log(arr, newArr, sum)