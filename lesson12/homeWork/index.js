// console.log("start")
// setTimeout(()=>{
//     console.log(new Date())
// }, 3000) 
// console.log("end")

// console.log("start")
// setTimeout(()=>{
//     console.log(Math.floor(Math.random()*100))
// }, 3000) 
// setTimeout(()=>{
//     console.log(Math.floor(Math.random()*100))
// }, 5000)
// setTimeout(()=>{
//     console.log(Math.floor(Math.random()*100));
// }, 7000)
// console.log("end")

// let text = document.getElementById("text")
// let div = document.createElement("div")
// document.body.appendChild(div)
// setInterval(()=>{
//     let num = Math.floor(Math.random()* +text.value)
//     div.innerText = num
// },1000)

// setInterval(() => {
//   div.innerHTML = Math.floor(Math.random() * div.innerHTML);
//   document.body.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)},
//                                             ${Math.floor(Math.random()*256)},
//                                             ${Math.floor(Math.random()*256)})`
// }, 1000);

// // 5 option 2
// let colors = ["green", "blue", "red", "black", "yellow"]
// setInterval(()=>{
//     let rndColor = Math.floor(Math.random() * colors.length + 1)
//     let chosenColor = colors[rndColor]
//     document.body.style.backgroundColor = chosenColor
// }, 1000)

// const button = document.createElement('button')
// document.body.appendChild(button)
// button.innerText = "Press me"
// button.style.width = "100px"
// button.addEventListener('click', ()=>{
//     document.body.style.backgroundColor = 'green'
//     setTimeout(()=> {
//         alert("Done")
//     }, 1000)
// })

// const button = document.createElement('button')
// document.body.appendChild(button)
// const rnd = document.createElement('div')
// document.body.appendChild(rnd)
// rnd.style.width = "300px"
// rnd.style.height = "100px"
// button.style.width = "300px"
// button.style.height = "100px"
// button.innerText = "Press me"
// function getRandomNumber(){
//         rnd.innerText = Math.floor(Math.random()*101)
// }
// function getRandomNumberAfterDelay(cb){
//     button.addEventListener('click', ()=>{
//         button.disabled = true
//         setTimeout(()=>{
//             cb()
//             button.disabled = false
//         }, 5000)
//     })
// }


//8
const button = document.createElement('button');
document.body.appendChild(button);
button.style.width = "300px";
button.style.height = "60px";
button.innerText = "Press Me";
const rnd = document.createElement('div');
document.body.appendChild(rnd);
rnd.style.width = "200px";
rnd.style.height = "50px";
function getRandomNum(limit, cb) {
    const randomNum = Math.floor(Math.random() * (limit + 1));
    cb(randomNum);
}
function getRandomNumAfterDelay(limit, cb) {
    rnd.innerText = "waiting...";
    setTimeout(() => {
        getRandomNum(limit, cb);
    }, 5000);
}
button.addEventListener('click', () => {
    getRandomNumAfterDelay(20, (num) => {
        rnd.innerText = num;
    });
});

// //9
// const span = document.createElement('span')
// document.body.appendChild(span)
// const button = document.createElement('button')
// document.body.appendChild(button)
// button.style.width = "300px"
// button.style.height = "60px"
// button.innerText = "Press Me"
// navigator.geolocation.getCurrentPosition(
//     (position) => {
//         span.innerText = (position.coords.latitude, position.coords.longitude);
//     },
//     (error) => {
//         span.innerText = (error.message);
//     }
// );