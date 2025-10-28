// function printNum(number){
//     console.log(number)
// }


// function nice(callback){
//     callback(42)
// }
// nice(printNum)







function printNum(num){
    console.log(num)
}

function nice(callback) {
	callback(42);
}

nice(printNum)

