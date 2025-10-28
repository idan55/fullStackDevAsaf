let express = require("express")
let app = express()
app.use(express.json())

let books = [{
    id: '101',
    book: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    available: true
  },
  
  {
    id: '102',
    book: "ahmed",
    author: "nig",
    year: 2000,
    available: true
  },
  
  {
    id: '103',
    book: "goodbook",
    author: "diger",
    year: 2025,
    available: true
  }]

app.post("/", (req, res) => {
        let book = {
            title: req.body.title,
            author: req.body.author,
            year: req.body.year,
            available: req.body.available
        }
        book.id = books.length == 0 ? 0 : books[books.length - 1].id + 1
        books.push(book)
    res.status(200).json(books)
          
})
app.get("/books", (req, res) => {
    res.status(200).json(books)
})

app.get("/books/:id", (req, res) => {
    console.log(req.params);
    let index = -1
    for(let i = 0; i < books.length; i++){
        if(+req.params.id === books[i].id){
            index = i
            break
        }
    }
    if(index == -1){
        res.status(404).json({message: "book not found"})
        return;
    }
    res.status(200).json(books[index])
    
})


app.put("/book/:id", (req, res) => {
const id = +req.params.id
let index = -1
for(let i = 0; i < books.length; i++){
    if(books[i].id == id){
        index = i
        break
    }
}
if(index == -1){
    res.status(404).json({message: "item not found"})
    return
}
books[index] = {
    ...books[index],
    ...req.body,
    id: id
}
res.status(200).json(books)
})

app.delete("/:id", (req, res) => {
    let bookToDelete = +req.params.id
    let index = -1
    for(let i = 0; i < books.length; i++){
        if(bookToDelete === books[i].id){
            index = i
            break
        }
    }
    if(index == -1){
        return res.status(404).json({message: "book not found"})
    }
    books.splice(index, 1)
    res.status(200).json(books)


})

app.get("/api/books/available", (req, res)=>{
    const newArr = []
    for(let i = 0; i < books.length; i++){
        if(books[i].available){
            newArr.push(books[i])
        }
    }
    res.status(200).json(newArr)
})


app.get("/books/year/:year", (req, res)=>{
    const year = +req.params.year
    let newArr = books.filter((b)=>b.year === year)
    if(newArr.length === 0)
        return res.status(404).json({message: "no book found for this year"})
    res.status(200).json(newArr)
    
})


app.get("/books/count/available", (req, res)=>{
    let counterA = 0
    let counterB = 0
    for(let i in books){
        if(books[i].available)
            counterA++
        else
        counterB++
    }
        res.status(200).json({"available: ": counterA,"unavailable ": counterB})
})


app.get("/books/count/year-range", (req,res)=>{
    const start = req.query.from
    const end = req.query.to
    const newArr = books.filter((b)=>b.year >= start && b.year <= end)
    if(newArr.length == 0)
        return res.status(404).json({message: "No books are from these years"})
    res.status(200).json({message: "Books from these years", newArr})
})


app.delete("/books/before/:year", (req, res)=>{
    const year = +req.params.year
    books = books.filter((b)=>b.year>=year)
    res.status(200).json({message: `All books before ${year} were deleted`, books})
})

app.listen(3000, () => console.log("Server is runnning on port 127.0.0.1:3000"))
