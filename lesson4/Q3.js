// function random(){
//      let number = Math.floor(Math.random()*100)+1
//      console.log(number)
// }
// function cool(callback){
//     callback()
// }

// cool(random)






let randomNum = () =>{
    let number = Math.floor(Math.random()*100)+1
    console.log(number)
}



function cool(callback) {
	callback();
}

cool(randomNum)

