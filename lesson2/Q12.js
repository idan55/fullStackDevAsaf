for(let i=0;i<10;i++)
{
    let randomNuM = Math.floor(Math.random()*100) +1
    if(randomNuM>50 && randomNuM<100 && randomNuM%2==0)
    {
        console.log(randomNuM)
    }
}