// const express = require("express")
// const app = express()
// app.use(express.json())

// let movies = [
//     { id: 1, title: "Up", director: "Pete Docter", year: 2009, isShowing: true },
//     { id: 2, title: "Shrek", director: "Andrew Adamson", year: 2001, isShowing: false },
//     { id: 3, title: "Ratatouille", director: "Brad Bird", year: 2007, isShowing: true }
// ]

// app.delete("/movies/:id", (req, res)=>{
//     const movieToDelete = Number(req.params.id)
//     let index = -1
// for(const[i, movie] of movies.entries()){
//     if(movie.id === movieToDelete){
//         index = i
//         break
//     }
// }
// if(index == -1){
//     return res.status(404).json({message: "movie doesnt exist on that id"})
// }
// res.status(200).json({message: "movie deleted", movies})
// })







// const express = require("express")
// const app = express()
// app.use(express.json())

// let movies = [
//     {id: 1, title : "Up"},
//     {id: 2, title: "Shrek"},
//     {id: 3, title: "Ratatouille"}
// ]

// app.delete("/movies/:id", (req, res) =>{
//     const index = -1
//     const id = Number(req.params.id)
//     for(let i = 0; i < movies.length; i++){
//         if(movies[i].id === id){
//             index = i
//             break
//         }
//     }
//     if(index === -1){
//        return res.status(404).json({message: "Movie not found"})
//     }
   
//     movies.splice(index, 1)
//     res.status(200).json({message: "movie deleted succesfully", movies})
    
// })









// const express = require("express")
// const app = express()
// app.use(express.json())

// let movies = [
//     { id: 1, title: "Up" },
//     { id: 2, title: "Shrek" },
//     { id: 3, title: "Ratatouille" }
// ]

// app.delete("/movies/:id", (req, res) =>{
//     let index = -1
//     let id = Number(req.params.id)
//     for(let i = 0; i < movies.length; i++){
//         if(movies[i].id === id){
//             index = i
//             break
//         }
//     }
//     if(index === -1){
//         return res.status(404).json({message: "Movie not found"})
//     }
//     movies.splice(index, 1)
//     res.status(200).json({message: "Movie deleted", movies})
// })

// app.listen(3000, () =>{
//     console.log("Server is running on port 3000")
// } )


// const express = require("express")
// const app = express()
// app.use(express.json())

// let movies = [
//     { id: 1, title: "Up" },
//     { id: 2, title: "Shrek" },
//     { id: 3, title: "Ratatouille" }
// ]

// app.delete("/movies/:id", (req, res)=> {
//     const id = Number(req.params.id)
//     let index = -1
//     for(const i in movies){
//         if(movies[i].id === id){
//             index = Number(i)
//             break
//         }
//     }
//     if(index === -1){
//         return res.status(404).json({message: "movie not found"})
//     }
//     movies.splice(index, 1)
//     res.status(200).json({message: "movie was deleted succesfully", movies})

// })

// app.listen(3000, ()=> {
//     console.log("Server is running non port 3000");
    
// })


// const express = require("express")
// const app = express()
// app.use(express.json())

// let movies = [
//     { id: 1, title: "Up" },
//     { id: 2, title: "Shrek" },
//     { id: 3, title: "Ratatouille" }
// ]

// app.delete("/movies/:id", (req, res)=>{
//     let index = -1
//     const id = Number(req.params.id)
//     for(const movie of movies){
//         if(movie.id === id){
//             index = movies.indexOf(movie)
//             break
//         }
//     }
//     if(index == -1){
//         return res.status(404).json({message: "Movie not found"})
//     }
//     movies.splice(index, 1)
//     res.status(200).json({message: "Movie deleted succesfully", movies})
// })
// app.listen(3000, ()=>{
//     console.log("Server is running on port 3000");
    
// })



// const express = require("express")
// const app = express()
// app.use(express.json())

// let movies = [
//     { id: 1, title: "Up" },
//     { id: 2, title: "Shrek" },
//     { id: 3, title: "Ratatouille" }
// ]

// app.delete("/movies/:id", (req, res)=>{
//    const id = Number(req.params.id)
//    const index = movies.findIndex(movie=>movie.id === id)
//     if(index == -1){
//         return res.status(404).json({message: "Movie not found"})
//     }
//     movies.splice(index, 1)
//     res.status(200).json({message: "Movie deleted succesfully", movies})
// })
// app.listen(3000, ()=>{
//     console.log("Server is running on port 3000");
    
// })


const express = require("express")
const app = express()
app.use(express.json())

let books = [
    { id: 1, title: "Dune", author: "Frank Herbert" },
    { id: 2, title: "1984", author: "George Orwell" },
    { id: 3, title: "Brave New World", author: "Aldous Huxley" }
]


app.get("/books", (req, res) =>{
    res.status(200).json(books)
})


app.get("/books/:id", (req, res) =>{
    const id = +req.params.id
    let index = -1
    for(let i = 0; i < books.length; i++){
        if(books[i].id === id){
            index = i
            break
        }
    }
    if(index === -1){
        return res.status(404).json({message: "book not found"})
    }
    res.status(200).json(books[index])
})


// app.put("/books/:id", (req, res=>{
//     const id = req.params.id
//     let index = -1
//     for(const i in books){
//         if(books[i].id === id){
//             index = Number(i)
//             break
//         }
//     }
//     if(index === -1){
//         return res.status(404).json({message: "book not found"})
//     }
//     if(books.title !== undefined) books.title = req.body.title
//     if(books.author !== undefined) (books.author = req.body.authour)
//         res.status(200).json({message: "book updated", books})

// }))


// app.patch("/books/:id", (req, res)=>{
//     const id = +req.params.id
//     let index = -1
//     let i = 0;
//     for(const book of books){
//         if(book.id === id){
//             index = i
//             break
//         }
//         i++
        
//     }
//     if(index === -1){
//         return res.status(404).json({message: "book not found"})
//     }
//     books[index] = {
//         ...books[index],
//         ...req.body,
//         id: id
//     }
//     res.status(200).json({message: "book updated succesfully", book: books[index]})
// })


app.patch("/books/:id", (req, res)=>{
    const id = +req.params.id
    let index = -1
    for(const i in books){
        if(books[i].id === id){
            index = +i
            break
        }
    }
        if(index === -1){
        return res.status(404).json({message: "book not found"})
    }
    books[index] = {
        ...books[index],
        ...req.body,
        id: id
    }
    res.status(200).json({message: "book updated", book: books[index]})   
})

app.listen(3000, ()=>{
    console.log("Server us running on port 3000"); 
})