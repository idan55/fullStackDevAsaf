let randomNuM = Math.floor(Math.random()*100)+1
console.log(randomNuM)
for(let i=randomNuM-1;i>=0;i--)
{
    if(i%2!=0)
    {
        console.log(i)
    }
}