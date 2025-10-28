let count=0
for(let i=0;i<10;i++)
{
    let randomNuM = Math.floor(Math.random()*100)
    console.log(randomNuM)
    if(randomNuM>10 && randomNuM<40 && randomNuM%2!=0)
    {
        count ++
    }
}
console.log("Amount of nums greater than 10 & smaller than 40 & odd: ", count)