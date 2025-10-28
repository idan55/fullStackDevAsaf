// function minInArray(arr){
//     let min = arr[0]
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < min){
//             min = arr[i]
//         }
//     }
//     return min

// }

// let minInArray2 = (arr) => {
//     let min = arr[0]
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < min){
//             min = arr[i]
//         }
//     }
//     return min
    
// }

// let numbersArray = [10, 2, 3, 4, 5]
// let start = minInArray2(numbersArray)
// console.log("min is: " + start)


// let numbersArray2 = [15, 7, 4, 6, 78, 9]
// let start2 = minInArray2(numbersArray2)
// console.log("min is: " + start2)








function smallest(arr){
    let min = 100
    for(let i = 0; i < arr.length; i++){
       if(arr[i] < min){
        min = arr[i]
       }
    }
    console.log(min)
}

let array = [10, 5, 18, 3, 22]
let start = smallest(array)
console.log(start)


