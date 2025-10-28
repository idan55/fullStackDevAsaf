let randomNum = Math.floor(Math.random()*100)+1
console.log(randomNum)
while(randomNum>0)
{
    if(randomNum%2!=0)
    {
        console.log(randomNum)
    }
    randomNum--
}