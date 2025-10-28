let i = 1
count = 0
while(i<=10)
{
    randomNum = Math.floor(Math.random()*100)+1
    console.log("Random num", i, ":", randomNum)
    if(randomNum<20)
    {
        count++
    }
    i++
}
console.log("Amount of numbers below 20: ", count)