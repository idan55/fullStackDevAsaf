// function randomColor(){
//     let arr = ['green', 'black', 'blue', 'yellow', 'orange', 'cyan']

//     let index = Math.floor(Math.random()*arr.length)
//     document.body.style.background = arr[index]
// }
// setInterval(() => {
//     randomColor()
// },1000)






function changeColor(){
    let arr = ['green', 'blue', 'black', 'yellow']
   let index = Math.floor(Math.random()*arr.length)
   document.body.style.background = arr[index]
}

setInterval(() =>{
    changeColor()
}, 1000)