const express = require("express")
const app = express()
app.use(express.json())


let students = {"idan": "jerusalem"}


app.get("/student/:name", (req, res) =>{
    let studentName = req.params.name
    if(students[studentName] !== undefined){
        res.status(200).json({city: students[studentName]})
    }
    else{
        res.status(404).json("error: Student is not found")
    }
})


app.post("/student/:name", (req, res) => {
    let studentName = req.params.name
    let city = req.body.city

    if (!city) {
        res.status(400).json({ error: "City is required in the body" })
        return
    }

    if (students[studentName] !== undefined) {
        res.status(409).json({ error: "Student already exists" })
        return
    }

    students[studentName] = city
    res.status(201).json({ message: "Student added", city: city })
})


app.patch("/student/:name", (req, res)=> {
    let studentName = req.params.name
    let city = req.body.city

    if(!city){
        res.status(400).json({error: "City is required in the body to update"})
        return
    }

    if(students[studentName] === undefined){
        res.status(404).json({error: "Student not found"})
        return
    }
    students[studentName] = city
    res.status(200).json({message: "Student updated", city: city})
})


app.delete("/student/:name", (req, res) =>{
    let studentName = req.params.name

    if(students[studentName] === undefined){
        res.status(404).json({message: "student doesn't exist"})
        return
    }

        delete students[studentName]
        res.status(200).json({message: "name was deleted"})
})


app.get("/students", (req, res) =>{
res.status(200).json(students)
})


app.get("/byCity/:city", (req, res) =>{
    let city = req.params.city
    let matchedStudents = []
    for(let name in students){
        if (students[name] === city){
            matchedStudents.push(name)
        }
    }
    if(matchedStudents.length === 0){
        res.status(404).json({message: "No students live in this city"})
    }
    else{
        res.status(200).json({students: matchedStudents})
    }
})
app.listen(3000, () =>{console.log("Server is running on port 3000")})



