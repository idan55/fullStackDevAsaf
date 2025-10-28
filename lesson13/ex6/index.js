function getPizzaFromServerAsync(){
    let p = new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            const n = Math.floor(Math.random()*101)
            if(n % 2 === 0){
                const diameter = Math.floor(Math.random()*41 + 10)
                const price = Math.floor(Math.random()*61 + 20)
                const toppings = Math.floor(Math.random()*5)
                resolve({status: "Success", 
                         pizza: {diameter, price, toppings}
            })
            }else{
                reject("Failed to get pizza object from server")
            }
        }, 1000)
    })
    return p
}

function r(result){
    console.log(result);
}

function e (result){
    console.log(result);  
}

const button = document.getElementById('button')
button.addEventListener('click', ()=>{
    getPizzaFromServerAsync().then(r).catch(e)
})