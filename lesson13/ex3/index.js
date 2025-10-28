function generateCuteAnimalAfterDelayAsync(){
    let p = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let arr = ["חתלתול", "כלבלב", "ארנבון", "תוכון", "עקרב", "עכביש", "ג'וק"]
            let animal = Math.floor(Math.random() * arr.length)
            if(animal === 0 || animal === 1 || animal === 2 || animal === 3){
                resolve(arr[animal] + " a cute animal")
            }
            else{
                reject(arr[animal] + " not a cute animal")
            }
        }, 1000)
    })
    return p
}

function r(result){
    console.log("animal is:", result)
}
function e (result){
    console.log("animal is: ", result)
}

const button = document.getElementById('button')
button.addEventListener('click', ()=>{
    generateCuteAnimalAfterDelayAsync().then(r).catch(e)
})