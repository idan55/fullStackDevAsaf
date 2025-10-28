// function hundredRandomNums(){
//     let arr = []
//     for(let i = 0; i<100; i++)
//     {
//         let number = Math.floor(Math.random()*100)+1
//         arr.push(number)
//     }
//     console.log(arr)
// }
// setInterval(() => {
//     hundredRandomNums()
    
// }, 3000);







let arrayHundred = () =>{
    let array = []
    for(let i = 0; i<100; i++){
        let num = Math.floor(Math.random () * 100)+1
        array.push(num)
    }
    console.log(array)
}
setInterval(() => {
    arrayHundred()
}, 3000)