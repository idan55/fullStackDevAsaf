let i = 0
sum = 0
while(i<=10)
{
    randomNum = Math.floor(Math.random()*100)+1
    console.log("num", i, ":", randomNum)
    sum+= randomNum
    i++
}
console.log("all nums summed up = ", sum)
