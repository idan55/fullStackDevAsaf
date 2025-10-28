let sum =0
for(i=0;i<10;i++)
{
    randomNuM = Math.floor(Math.random()*100)+1
    console.log("num : ", (i+1), ":", randomNuM)
    if (randomNuM<20)
    {
        sum+=randomNuM
    }
    
}
console.log("Sum of all nums under 20: ", sum,)