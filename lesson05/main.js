let arr = [1, 2, 3, 4, 10, 6, 5];
let names = ['Idan', 'Moshe', 'Hadad', 'David', 'George'];
let fruits = ["apple", "banana", "orange"];
console.log(arr.filter(num => num % 2 == 0));
console.log(arr.map(num => num * 3));
names.forEach( names => console.log( names + " i"));
let divideBy5 = arr.find(num => num % 5 == 0);
console.log(divideBy5);
let negative = arr.some(num => num < 0);
console.log(negative);
let positive = arr.every(num => num > 0);
console.log(positive);
let shalom = names.findIndex(names => names == 'Moshe')
console.log(shalom)
let index = fruits.indexOf("banana")
console.log(index)
let i = names.indexOf("David");
let j = names.indexOf("George");
if(i != -1){
    console.log("David exists in name at index : " + i);
}
else if(i == -1){
    console.log("David doesn't exist in names");
}
if(j != -1){
    console.log("George exists in name at index: " + j);
}
else if(j == -1){
    console.log("George doesn't exist in names");
}


//dictionaries
let computer = {title: "mac", price: 3000, memory: "512gb", color:"space grey", size: "16 inch" }
console.log(computer)
let keys = Object.keys(computer)
console.log(keys)
console.log(computer.price)

let persons = [
    {
        firstName: "Azriel",
        lastName: "Tzippel",
        age: 23,
        hasGlasses: true
    },
    {
        firstName: "Heniel Chaim",
        lastName: "Ben Zvi",
        age: 22,
        hasGlasses: false
    },
    {
        firstName: "Itai",
        lastName: "Rotschild",
        age: 19,
        hasGlasses: true
    }
]

console.log(persons)
console.log(persons[0])
if(persons[0].age == persons[2].age){
    console.log("Age of first and last person is equal")
}
else if(persons[0].age > persons[2].age){
    console.log("Age of first person is bigger than last person")
}
else if(persons[0].age < persons[2].age){
    console.log("Age of last person is bigger than first person")
}

for(let i = 0; i < persons.length; i++){
    console.log(persons[i])
}
for(let i = 0; i < persons.length; i++){
    console.log(persons[i].firstName)
}
let personsMax = persons[0]
for(let i = 0; i < persons.length; i++){
    if(persons[i].age > personsMax){
        personsMax = persons[i].age
    }
}
console.log(personsMax)

let sum = 0
for(let i = 0; i < persons.length; i++){
    sum += persons[i].age
}
console.log(sum)


let scores = [85, 42, 97, 63, 78, 91, 55, 88, 72, 94];
let cities = ['Tokyo', 'London', 'Paris', 'Berlin', 'Sydney', 'Cairo', 'Mumbai', 'Rome'];
let animals = ['cat', 'elephant', 'dog', 'butterfly', 'lion', 'rabbit'];
let temperatures = [23, -5, 18, 31, -2, 12, 28, 35, -8, 19];
let products = ['laptop', 'phone', 'tablet', 'mouse', 'keyboard', 'monitor'];


let above70 = scores.filter(score => score >= 70)
console.log(above70)
let add5 = above70.map(score  => score +5)
console.log(add5)
let print = add5.forEach(score => console.log("score: " + score))
let divBy7 = scores.find(score => score % 7 == 0)
console.log(divBy7);
let pos = scores.every(num => num > 0)
console.log(pos)
let highScore = scores.some(num => num > 95)
console.log(highScore)

let findBerlin = (cities.findIndex(find => find == 'Berlin'))
console.log(findBerlin)
let romeExists = (cities.indexOf('Rome'))
if(romeExists != -1){
    console.log("Rome does exist in array at index " + romeExists)
}
else{
    console.log("Rome doesn't exist in array")
}
let fiveLetters = cities.filter(city => city.length == 5)
console.log(fiveLetters)
cities.forEach(city => console.log("Visit " + city ));
let cityS = cities.find(city => city[0] == 'S')
console.log(cityS)

let letterA = animals.filter((letter) => letter.includes('a'))
console.log(letterA)
let letter = animals.map((letter) => letter.toUpperCase())
console.log(letter)
animals.forEach(animal => console.log("I love " + animal + "s"))
let lion = animals.findIndex(find => find == "lion" )
if(lion == -1){
    console.log("lion doesn't exist in array")
}
else{
    console.log("lion is at index: " + lion)
}
let eightLetters = animals.some(animal => (animal.length > 8))
console.log(eightLetters)
let threeLetters = animals.every(animal => (animal.length >= 3))
console.log(threeLetters)

let temperaturesAboveZero = temperatures.filter(temp => temp > 0) 
console.log(temperaturesAboveZero)
let fahrenheit = temperatures.map(temp => Math.round(temp * (9/5) + 32))
console.log(fahrenheit)
let celsAndFahr = temperatures.forEach((deg, index) => console.log(deg +"°C " + fahrenheit[index] +"°F \n"))
let neg = temperatures.find(temp => temp < 0)
console.log(neg)
const above10 = temperatures.every(temp => temp < 10)
console.log("all temps are above10: " + above10)
const zero = temperatures.some(temp => temp == 0)
console.log("some temps are exactly 0: " + zero)

const letterE = products.filter(product => product[product.length-1] === 'e')
console.log(letterE)
const money = products.forEach(produit => console.log('$299 ' + produit))
const availabilty = products.forEach(produkt => console.log('availaible ' + produkt))
const tablet = products.findIndex(product => product == 'tablet')
console.log(tablet)
const camera = products.indexOf('camera')
if(camera != -1){
    console.log('camera exists at index ' + camera)
}
else{
    console.log('camera doesnt exist in array')

}
const fourLetters = products.find(product => product.length === 4)
if(fourLetters !== undefined){
    console.log(fourLetters)
}
else{
    console.log('no four letters word exist')
}
const threeLetterss = products.every(product => product.length > 3)
console.log(threeLetterss)

