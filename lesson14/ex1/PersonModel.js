const mongoose = require('mongoose')
const PersonSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "A person must have a first name"],
        unique: true,
        trim: true
    },
    familyName:{
        type: String,
        required: [true, "A person must have a family name"],
        trim: true
    },
    country: {
        type: String,
        required: [true, "A person must have a country"],
        trim: true
    },
    salary: {
        type: Number,
        required: [true, "a person must make a living, unless he's profiting from the system..."],
        min: [6000, "Salary must be above 6000 ils"],
        max: [40000, "Salary must be under 40000 ils (we still live in Israel bro)"]
    },
    created: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('Person', PersonSchema)
