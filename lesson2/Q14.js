// for(let i=0; i<10; i++)
// {
//     randomNuM = Math.floor(Math.random()*100)
//     if(randomNuM<20)
//     {
//         console.log(randomNuM)
//     }
//     else{console.log("The num is bigger than 20: " + randomNuM)}
// }

let count=0
for(let i = 0; i<10; i++)
{
    randomNuM = Math.floor(Math.random()*100) + 1
    console.log(randomNuM)
    {
        if(randomNuM<20)
        {
            count++
        }
    }
}
console.log("Amount of nums smaller than 20 is: ", count)