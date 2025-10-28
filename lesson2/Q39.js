let i = 1
count = 0
while(i<=10)
{
    randomNum = Math.floor(Math.random()*100)+1
    console.log("Random num", i, ":", randomNum)
    if(randomNum>10 && randomNum<40 && randomNum%2!=0)
    {
        count ++
    }
    i++
}
console.log("amount of odd nums between 10 and 40:", count)