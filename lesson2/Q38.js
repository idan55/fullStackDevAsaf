let i = 1
count = 0
while(i<=10)
{
    randomNum = Math.floor(Math.random() * 100)+ 1
    console.log("random num", i, ":", randomNum)
    if(randomNum>10 && randomNum<20)
    {
        count ++
    }
    i++
}
console.log("amount of nums between 10 and 20 is:", count)