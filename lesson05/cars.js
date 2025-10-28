let cars = [
    {
        brand: "Toyota",
        model: "Corolla",
        year: 2018,
        electric: false
    },
    {
        brand: "Tesla",
        model: "Model 3",
        year: 2022,
        electric: true
    },
    {
        brand: "Mazda",
        model: "CX-5",
        year: 2020,
        electric: false
    }
];

console.log(cars[0].brand + " " + cars[0].year);


for(let car of cars){
    console.log(car)
}
for(let brandName of cars){
    console.log(brandName.brand)
}

let electrics = cars.filter(item => item.electric == true)

console.log(electrics)

let newCars = cars.map((item) => {
    if(item.electric){
        item.icon = "⚡️"
    }
    else{
        item.icon = "⛽"
    }
    return item
})
console.log(newCars)

