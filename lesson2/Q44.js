let i = 1
max = 0
while(i<=10)
{
    randomNum = Math.floor(Math.random()*100)+1
    console.log("num", i, ":", randomNum)
    if(randomNum>max)
    {
        max = randomNum
        console.log("largest num is: ", max)
    }
    i++
}
console.log("largest num is: ", max)