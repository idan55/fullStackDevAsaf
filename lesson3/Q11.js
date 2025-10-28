// function avg(arr){
//     let average = 0
//     for(let i = 0; i < arr.length; i++){
//         average += arr[i]
//     }
//     return average /= arr.length
// }
// let numbers = [1, 2, 3, 4]
// let a = avg(numbers)
// console.log("avg is = " + a)









// function average(arr){
//     let sum = 0
//     for(i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     return sum/arr.length
// }

let average2 = (arr) =>{
    let sum = 0
    for(i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum/arr.length
}


let numbers = [7, 14, 21, 28, 35]
let start = average2(numbers)
console.log(start)