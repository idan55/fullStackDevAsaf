function generatePrimeNumberAfterDelayAsync(min, max){
    let p = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*101)
            for(let i = 2; i < num/2; i++){
                if(num%i == 0){
                    reject(num + " is not a prime number")
                }
            }
            resolve(num + " is a prime number")
        }, 1000)
    })
    return p
}

function r(result){
    console.log("result:", result)
}
function e(result){
    console.log("error:", result)
}
// generatePrimeNumberAfterDelayAsync(10, 100).then(r).catch(e)
const min = document.getElementById('min')
const max = document.getElementById('max')
const button = document.getElementById('button')
button.addEventListener('click', ()=>{
    generatePrimeNumberAfterDelayAsync(min.value, max.value).then(r).catch(e)

})