let min = 100
for(let i=1; i<=10; i++)
{
    let randomNum = Math.floor(Math.random()*100)+1
    console.log("num ", i, ":", min)
    if(randomNum<min)
    {
        min = randomNum
    }
}
console.log("the smallest number is: ", min)