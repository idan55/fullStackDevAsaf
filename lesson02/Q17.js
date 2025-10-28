let sum=0
for(let i = 0; i < 10;i++)
{
    let randomNuM = Math.floor(Math.random()*100)+1
    console.log("Num ", (i+1), ":", randomNuM)
    sum += randomNuM
}
console.log("sum is: ", sum)