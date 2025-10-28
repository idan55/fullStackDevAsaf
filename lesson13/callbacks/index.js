// function nameI(){
//     console.log("Idan")
// }

// function b(callback){
// callback()
// }
// b(nameI)


// function cool(callback) {
// 	callback();
// }

// function random(){
//     console.log(Math.floor(Math.random()*101))
// }

// cool(random)


// function nice(callback) {
// 	callback(42);
// }

// function printNum(num){
//     console.log(num)
// }

// nice(printNum)


// function amazing(callback) {
// 	const num = callback(42, 128, 37, 81, 66);
// 	console.log("Num: " + num);
// }
// function t(x1, x2, x3, x4, x5){
//     let arr =[x1, x2, x3, x4, x5]
//     let index = Math.floor(Math.random()*5)
//     return arr[index]
// }
// amazing(t)


function cool(paintCallback) {
	paintCallback();
}

function randomColor(){
    let arr = ["green", "yellow", "blue", "red"]
    let rnd = Math.floor(Math.random()*arr.length)
    console.log(arr[rnd]);
}

cool(randomColor)
