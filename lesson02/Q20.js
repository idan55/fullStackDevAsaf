let sum = 0

for(let i = 0; i<10; i++)
{
    randomNuM = Math.floor(Math.random()*100)+1
    console.log( "num ", (i+1), ":", randomNuM)
    if(randomNuM>10 && randomNuM<30)
    {
        sum += randomNuM
    }
}
console.log("Sum of all nums greater than 10 and smaller than 30 is : ", sum)