// function randomColor(red, green, blue, yellow){
//     let arr = ['red', 'green', 'blue', 'yellow']
//     let index = Math.floor(Math.random()*4)
//     console.log(arr[index])
// }


// function cool(paintCallback) {
// 	paintCallback();
// }

// cool(randomColor)






let randomColor = () =>{
   let colorsArr = ['green', 'red', 'blue', 'yellow']
   index = Math.floor(Math.random()*4)
   console.log(colorsArr[index])
}

let cool = (paintCallback) => {
	paintCallback();
}

cool(randomColor)
