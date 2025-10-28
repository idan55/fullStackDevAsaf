// function printName(){
//     console.log("idan")
// }
// function b(callback){
//     callback()
// }
// b(printName)











let nameI = () =>{
    console.log("idan")
}
let b = (callback) => {
callback()
}

b(nameI)