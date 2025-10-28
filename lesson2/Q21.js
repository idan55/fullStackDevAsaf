let sum = 0
for(i = 0; i < 10; i++)
{
    randomNuM=Math.floor(Math.random()*100)+1
    console.log("num ", (i+1), ":", randomNuM)
    if(randomNuM>10 && randomNuM<30 && randomNuM%2==0)
    {
        sum += randomNuM
    }

}
console.log("sum of nums bigger than 10 smaller than 30 and even is:", sum)