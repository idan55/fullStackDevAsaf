let i = 0 
sum = 0
while(i<=10)
{
    randomNum = Math.floor(Math.random()*100)+1
    console.log("random num ", i, ":", randomNum)
    if(randomNum<20)
    {
        sum+=randomNum
    }
    i++
}
console.log("all nums below 20 summed up: " , sum)