const express = require("express")
const app = express()
app.use(express.json())

let movies = [
    {
        title: "Mary Poppins",
        director: "S. Spielberg",
        year: 1980,
        isShowing: false,
        id: 1
    },
    {
        title: "Magnus Chase",
        director: "Dr. Phil",
        year: 1990,
        isShowing: true,
        id: 2
    }
]

app.get("/movies", (req, res) =>{
res.status(200).json(movies)
})

app.get("/movies/:id", (req, res) =>{
    const id = Number(req.params.id)
    const movie = movies.find(m=>m.id === id)
      if(!movie){
        res.status(404).json({message: "Movie doesn't exist"})
      }
      else{
        res.status(200).json(movie)
      }
})
//     let index = -1
//     for(let i = 0; i < movies.length; i++){
//         if(Number(req.params.id) === movies[i].id){
//             index = i
//             break
//     }}
//     if(index == -1){
//         res.status(404).json({message: "no movie matches this id"})
//     }
//     else{
//         res.status(200).json(movies[index])
//     }

app.post("/", (req, res)=>{
    const{title, director, year, isShowing} = req.body
    if(title === undefined ||
    director === undefined ||
    year === undefined ||
    isShowing === undefined){
        return res.status(400).json({message: "All fields need to be filled in order to post"})

    }
    let movie = {
        title: req.body.title,
        director: req.body.director,
        year: req.body.year,
        isShowing: req.body.isShowing
    }
    movie.id = movies.length == 0 ? 0 : movies[movies.length - 1].id + 1
    movies.push(movie)
    res.status(200).json(movies)
})


app.put("/movies/:id", (req, res)=>{
    const id = Number(req.params.id)
    const movie = movies.find(m=>m.id === id)
    if(!movie){
        res.status(404).json({message: "Movie doesn't exist"})
        return
    }
    if(req.body.title !== undefined) movie.title = req.body.title
    if(req.body.director !== undefined) movie.director = req.body.director
    if(req.body.year !== undefined) movie.year = req.body.year
    if(req.body.isShowing !== undefined) movie.isShowing = req.body.isShowing
    res.status(200).json({ message: "Movie updated", movie })
})


app.delete("/movies/:id", (req, res)=>{
    let movieToDelete = +req.params.id
    let index = -1
    for(let i = 0; i < movies.length; i++){
        if(movieToDelete === movies[i].id){
            index = i
            break
        }
    }
    if(index == -1){
        return res.status(400).json({message: "Movie doesn't exist"})
    }
    movies.splice(index, 1)
    res.status(200).json(movies)

})


app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})


