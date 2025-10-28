// function addArrays(arr, arr2){
//     let newArr = []
//     for(let i = 0; i < arr.length; i++){
//         newArr.push(arr[i])
//     }
//     for(let i = 0; i < arr2.length; i++){
//         newArr.push(arr2[i])
//     }
//     return newArr
// }

// let arr = [1, 2, 3]
// let arr2 = [4, 5, 6]
// let start = addArrays(arr, arr2)
// console.log(start)

// function addArrays(arr, arr2){
//     return arr.concat(arr2)
// }

// let arr = [1, 2, 3]
// let arr2 = [4, 5, 6]
// let start = addArrays(arr, arr2)
// console.log(start)

// function addArrays(arr, arr2){
//     return[...arr, ...arr2, 7, 9, 8];
// }

// let addArrays = (arr,arr2) =>{
//     return[...arr, ...arr2, 7, 9, 8];
// }

// let arr = [1, 2, 3]
// let arr2 = [4, 5, 6]
// let start = addArrays(arr, arr2)
// console.log(start)


let addArrays = (arr, arr2) => {
    return arr.concat(arr2)
}

let array1 = [1, 2, 3]
let array2 = [6, 7, 8]
let result = addArrays(array1, array2)
console.log(result)

console.log(addArrays(array1, array2))
