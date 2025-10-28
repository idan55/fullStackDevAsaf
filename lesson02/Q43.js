let i = 1
sum = 0
while(i<=10)
{
    randomNum = Math.floor(Math.random()*100)+1
    console.log("Random num", i, ":", randomNum)
    if(randomNum>10 && randomNum<30)
    {
        sum += randomNum
    }
    i++
}
console.log("all numbers between 10 & 30 summed up : ", sum)