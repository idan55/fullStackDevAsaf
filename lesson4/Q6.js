function randomNum(){
    let num = Math.floor(Math.random() * 100)+1
    console.log(num)
}


function cool(callback) {
	callback()
}

cool(randomNum)
