let express = require("express")
let app = express()
app.get("/api/name", (req, res) => {
    res.status(200).send('Idan Hadad')
})

app.get("/students/number", (req, res) => {
    let number = Math.floor(Math.random() * 100)+1
    res.status(200).send("" + number)
})

app.post("/courses/n1ton2", (req, res) => {
    let number2 = 1001 + Math.floor(Math.random() * 1000)
    res.status(200).send("" + number2)
} )
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
})