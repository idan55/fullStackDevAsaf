function getArrayFromServerAsync(size){
    let p = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let arr = []
            const n = Math.floor(Math.random()*101)
            if(n % 2 === 0){
                for(let i = 0; i < size; i++){
                    const num = Math.floor(Math.random()*101)
                    arr.push(num)
                }
                resolve("Success: " + arr)
            }
            else{
                reject("Fail, unable to get array from server")
            }
        }, 1000)
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
    getArrayFromServerAsync(4).then(r).catch(e)
})