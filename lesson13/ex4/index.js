function generateWorkingDayAfterDelayAsync(){
    let p = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            const day = Math.floor(Math.random()*arr.length)
            if(day < 4){
                resolve("Succes: " + arr[day])
            }
            else{
                reject("Fail: " + arr[day])
            }
        },1000)
    })
    return p
}

function r(result){
    console.log(result)
}
function e(result){
    console.log(result)  
}

const button = document.getElementById('button')
button.addEventListener('click', ()=>{
    generateWorkingDayAfterDelayAsync().then(r).catch(e)
})
