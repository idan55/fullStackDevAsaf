// function t1(n1, n2, n3, n4, n5){
//     let index = Math.floor(Math.random()*5)
//     let arr = [n1, n2, n3, n4, n5]
//     return arr [index]
// }


// function amazing(callback) {
// 	const num = callback(42, 128, 37, 81, 66);
// 	console.log("Num: " + num);
// }

// amazing(t1)













let t = (...numbers) =>{
    let index = Math.floor(Math.random() * numbers.length)
    return numbers[index]
}


function amazing(callback) {
	const num = callback(42, 128, 37, 81, 66, 70, 92);
	console.log("Num: " + num);
}

amazing(t)

