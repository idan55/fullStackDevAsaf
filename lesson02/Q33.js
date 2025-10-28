let i = 1
while(i<=10)
    {
    let randomNum = Math.floor(Math.random()*100)+1
    if(randomNum>50)
    {
        console.log("Random num", i, "is:", randomNum)
    }
    i++
}
