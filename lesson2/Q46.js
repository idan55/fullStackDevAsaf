let i = 1
maxUnder50 = 0
while(i<=40)
{
    let weight = Math.floor(Math.random()*71)+30
    console.log("random num", i, ":", weight)
    if(weight < 50 && weight > maxUnder50)
    {
        maxUnder50 = weight
    }
    i++
}
console.log("biggest random num under 50 = ", maxUnder50)