let fruits = ['apple','banana', 'cherry', 'date'];
console.log(fruits[1])

let colors = ['red', 'blue', 'green'];
colors [1] = 'yellow'
console.log(colors)

let animals = ['dog', 'cat'];
animals.push('parrot')
console.log(animals)

let numbers = [3, 7, 9, 12, 4];
for(let i = 0; i < numbers.length; i++){
  if( numbers [i] > 5){
    console.log(numbers[i])
  }
}

let names = ['Dana', 'Itay', 'Lior', 'Tal'];
names.pop()
names.push('Noa')
names.unshift('Amit')
console.log(names)