const express = require("express")
const app = express()
app.use(express.json())


let movies = [
  {
    id: 0,
    title: "Inception",
    director: "Christopher Nolan",
    price: 40,
    isShowing: true
  },
  {
    id: 1,
    title: "Interstellar",
    director: "Christopher Nolan",
    price: 45,
    isShowing: false
  },
  {
    id: 2,
    title: "The Grand Budapest Hotel",
    director: "Wes Anderson",
    price: 35,
    isShowing: true
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    price: 30,
    isShowing: true
  },
  {
    id: 4,
    title: "Parasite",
    director: "Bong Joon-ho",
    price: 25,
    isShowing: false
  }
]

app.get("/movies", (req, res)=>{
    res.status(200).json(movies)
})


app.get("/movies/:id", (req, res)=>{
    const id = +req.params.id
    const movie  = movies.find((m)=>m.id === id)
    if(!movie){
        return res.status(404).json({message: "Movie not found"})
    }
    res.status(200).json(movie)
    
})

app.post("/movies", (req, res)=>{
    const movie = {
        title: req.body.title,
        director: req.body.director,
        price: req.body.price,
        isShowing: req.body.isShowing
    }
    movie.id = movies.length == 0 ? 0 : movies[movies.length-1].id + 1
    movies.push(movie)
    res.status(200).json({message: "movie added succesfully", movies})
})


app.put("/movies/:id", (req, res)=>{
    let index = -1
    const id = +req.params.id
    for(let i in movies){
        if(movies[i].id===id){
            index = +i
            break
        }
    }
    if(index === -1){
        return res.status(404).json({message: "No movie found"})
    }
    movies[index]={...req.body, id: id}
    res.status(200).json({message: "Movie updated", movies})
})


app.delete("/movies/:id", (req, res)=>{
    // let index = -1
    const id = +req.params.id

    // this is good!!!
    // for(let i in movies){
    //     if(movies[i].id === id){
    //         index = +i
    //         break
    //     }
    // }
    const index = movies.findIndex((m)=>m.id === id)

    //not good!!! because movie is a whole object i can't tell the id specifically what to do
    // let index = -1
    // const id = +req.params.id
    // for(const movie of movies){
    //     if(movie.id === id){
    //         index = movie
    //     }
    // }

    if(index === -1){
        return res.status(404).json({message: "No movie found"})
    }
    movies.splice(index, 1)
    res.status(200).json({message: "Movie deleted", movies})
})


app.get("/movies/price/average", (req, res)=>{
    let sum = 0
    for(let i = 0; i < movies.length; i++){
        sum += movies[i].price
    }
    const averagePrice = sum/movies.length
    res.status(200).json({message: "averagePrice", averagePrice})
})


app.get("/movies/price/above/:amount", (req, res)=>{
    const amount = +req.params.amount
    let newArr = movies.filter((m)=>m.price > amount)
    res.status(200).json(newArr)
})


app.get("/movies/price/below/:amount", (req, res)=>{
   const amount = +req.params.amount
   let newArr = movies.filter((m)=>m.price < amount)
   res.status(200).json(newArr)
})


app.get("/movies/search/title/:title", (req, res)=>{
    const title = req.params.title.toLowerCase()
    let newArr = movies.filter((m)=>m.title.toLowerCase().includes(title))
    res.status(200).json(newArr)
 })


 app.get("/movies/search/director/:director", (req, res)=>{
    const director = req.params.director.toLowerCase()
    const newArr = movies.filter((m)=>m.director.toLowerCase().includes(director))
    if(newArr.length === 0){
        return res.status(404).json({message: "no movie matches"})
    }
    res.status(200).json(newArr)
 })


 app.get("/movies/what/is/showing", (req, res)=>{
    const newArr = []
    for(const movie of movies){
        if(movie.isShowing){
            newArr.push(movie)
        }
    }
    if(newArr.length === 0){
        return res.status(404).json({message: "no movies are showing rn"})
    }
    res.status(200).json(newArr)
 })


app.get("/movies/count/showing", (req, res)=>{
    let counter = 0
    for(const movie of movies){
        if(movie.isShowing){
            counter++
        }
    }
    res.status(200).json({available : counter, unavailable: movies.length - counter})
})

app.listen(3000, ()=>{
    console.log("Server listens on port 3000");
    
})


