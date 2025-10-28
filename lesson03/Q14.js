// function biggerThan50(arr){
//     let arr2 = []
//     for(let i = 0; i < arr.length; i++){
//         if (arr[i] > 50){
//             arr2.push(arr[i])

//         }

//     }
//     return arr2
// }

// let numbers = [30, 51, 100, 20, 75, 40]
// let start = biggerThan50(numbers)
// console.log(start)




// function biggerThan50(arr){
//     let arr2 = []
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > 50){
//             arr2.push(arr[i])
//         }
//     }
//     return arr2
// }

// let biggerThan50 = (arr) =>{
//     let arr2 = []
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > 50){
//             arr2.push(arr[i])
//         }
//     }
//     return arr2
// }
// let array = [30, 51, 100, 20, 75, 40]
// let start = biggerThan50(array)
// console.log(start)











let biggerThan50 = (arr) =>{
    let newArr = []
    for(let i = 0; i<arr.length; i++){
        if(arr[i]>50){
            newArr.push(arr[i])
        }
    }
    return newArr
}

let array1 = [30, 51, 100, 20, 75, 40]
let start = biggerThan50(array1)
console.log(start)