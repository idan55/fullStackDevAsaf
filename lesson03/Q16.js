// function numbersInArray(arr, num){
//     let c = 0
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] == num){
//             c++
//         }
//     }
//     return c
// }
// let numbers = [1, 4, 4, 2, 4, 5, 4] 
// let targetNumber = 4
// let start = numbersInArray(numbers, targetNumber)
// console.log(start)










// function numberInArray(arr, num){
//     let count = 0
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] == num){
//             count ++
//         }
//     } 
//     return count
// }

// let numberInArray = (arr, num) => {
//     let count = 0
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] == num){
//             count ++
//         }
//     } 
//     return count
// }

// let numbers =  [1, 4, 4, 2, 4, 5, 4] 
// let targetNumber = 4
// let start = numberInArray(numbers, targetNumber)
// console.log(numbers, targetNumber, start)










let numberInArray = (arr, num) => {
    let sum = 0
    for(let i = 0; i< arr.length; i++){
        if(arr[i] == num){
            sum++
        }
    }
    return sum
}

let numbers = [1, 4, 4, 2, 4, 5, 4] 
let targetNum = 4
let start = numberInArray(numbers, targetNum)
console.log(start)

