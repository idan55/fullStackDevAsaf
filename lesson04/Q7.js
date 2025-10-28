function printNum(number){
    console.log(number)
}


function nice(callback) {
	callback(42);
}

nice(printNum)
