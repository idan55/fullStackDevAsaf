// for(let i=0;i<10;i++)
// {
//     let randomNuM = Math.floor(Math.random()*100)
//     if(randomNuM>20)
//     {
//         console.log(randomNuM)
//     }
// }
let count = 0;

for (let i = 0; i < 10; i++) {
  let num = Math.floor(Math.random() * 100) + 1;
  console.log("Number:", num);

  if (num > 20) {
    count++;
  }
}

console.log("Amount of numbers greater than 20:", count);
