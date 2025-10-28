const express = require("express")
const app = express()

const heroes = ["ironman", "superman"]

app.get('/', (req, res) =>{
    res.status(200).send("hello world");
    
})
app.get("/secret", (req, res) =>{
    res.status(200).send("You found the secret<br><a href=\"/\"> Back to homepage</a>");
    
})

app.get('/names/:name', (req, res) =>{
    const theName = req.params.name
    if(heroes.includes(theName)){
        res.status(200).send(`${theName} please save us!`)
    }
    else{
        res.status(200).send(`Hello ${theName}: welcome to the page`)
    }
})
let names = []

app.get("/add/:name", (req, res) =>{
    const addedName = req.params.name
    if(names.includes(addedName)){
        res.status(200).send(`name ${addedName}, already exists`)
    }
    else{
        names.push(addedName)
        res.status(201).send(addedName)
    }
})

app.get("/list", (req, res) =>{
    const htmlList = names.sort().map(name => `<li>${name}</li>`).join("")
    res.status(200).send(`<h1>List of names</h1><ol>${htmlList}</ol>`)
})

app.get("/delete/:name", (req, res) =>{
    let nameToDelete = req.params.name
    if(names.includes(nameToDelete)){
        names.splice(names.indexOf(nameToDelete), 1)
        res.status(200).send(`${nameToDelete} was deleted`)
}
    else{res.status(404).send(`name ${nameToDelete}, doen't exist`)
}
})
app.listen(3001, ()=> console.log("Server is running on port 3001"))