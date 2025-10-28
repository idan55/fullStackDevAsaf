let i = 1
min = 100
while(i<=10)
{
    randomNum = Math.floor(Math.random()*100)+1
    console.log("Num ", i, ":", randomNum)
    if(randomNum<min)
    {
        min = randomNum
        console.log("Smallest num is: ", min)
    }
    i++
}
console.log("Smallest num is: ", min)