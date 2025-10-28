function generateStrongPasswordAsync(){
    let p = new Promise((resolve, reject)=>{
        const arr = []
        let flagNum = 0
        let flagLetter = 0
        let flagCapital = 0
        setTimeout(()=>{
            for(let i = 0; i < 6; i++){
                let choose = Math.floor(Math.random()* 3) 
                if(choose === 0){
                    let capitalLetter = Math.floor(Math.random()* 26 + 65)
                    let cLetter = String.fromCharCode(capitalLetter)
                    arr.push(cLetter)
                    flagCapital = 1
                }
                else if(choose === 1){
                    let letter = Math.floor(Math.random()* 26 + 97)
                    let normalLeter = String.fromCharCode(letter)
                    arr.push(normalLeter)
                    flagLetter = 1
                }
                else{
                    let num = Math.floor(Math.random()*10)
                    arr.push(num)
                    flagNum = 1
                }
            }

            const password = arr.join("")
            if(flagCapital === 1 && flagLetter === 1  && flagNum === 1)
                {
                resolve("Success, Password is: " + password)
            }
            else{
                reject("Failed to auto generate a secure password: " + password)
            }

        }, 1000)
    })
    return p
}

function r(result){
    console.log(result)
}

function e (result){
    console.log(result)
}

const button = document.getElementById('button')
button.addEventListener('click', ()=>{
    generateStrongPasswordAsync().then(r).catch(e)
})
