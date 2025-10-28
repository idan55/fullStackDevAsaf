// function painter(red, green, blue){
//     let arr = ['Red', 'Green', 'Blue']
//     let index = Math.floor(Math.random()*3)
//     return document.body.style.background = arr[index]
// }




// function amazing(paintCallback) {
// 	const paintedColor = paintCallback("Red", "Green", "Blue");
// 	console.log("Painted Color: " + paintedColor);
// }

// amazing(painter)









function color(red, green, blue){
   let arr = ['red', 'green', 'blue', 'cyan']
    let index = Math.floor(Math.random() * arr.length)
    return document.body.style.background = arr[index]
    
}

function amazing(paintCallback) {
	const paintedColor = paintCallback("Red", "Green", "Blue");
	console.log("Painted Color: " + paintedColor);
}

amazing(color)
