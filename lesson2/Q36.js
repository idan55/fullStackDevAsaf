let i = 1
count = 0
while(i<=10)
{
    let randomNum = Math.floor(Math.random()*100)+1
    console.log("num",i, ":", randomNum)
    if(randomNum>20)
    {
        count ++
    }
    i++
    }
console.log("amount of number anove 20:", count)
