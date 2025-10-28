let max = 0
for(let i =1; i<=10; i++)
{
    let randomNuM = Math.floor(Math.random()*100)+1
    console.log("num", i,":", randomNuM)
    if(randomNuM>max)
    {
        max=randomNuM
    }
}
console.log("The greatest number is: ", max)