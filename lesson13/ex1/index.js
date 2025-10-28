function generate7BoomAfterDelayAsync(min, max){
    let p = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()* (max - min) + min)
            if(num % 10 === 7 || num % 7 === 0){
                resolve(num + " :7boom")
            }
            else{
                reject(num + " :not7boom")
            }
        }, 1000)
    })
    return p
}
function r(result){
    console.log("result", result)
}
function e(result){
    console.log("error", result);
}
// generate7BoomAfterDelayAsync(10, 100).then(r).catch(e)

const min = document.getElementById('min')
const max = document.getElementById('max')
const button = document.getElementById('button')
button.addEventListener('click', ()=>{
    generate7BoomAfterDelayAsync(min.value, max.value).then(r).catch(e)
})

