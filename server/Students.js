const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    confirmpasword:String
})

const StudentModel = mongoose.model("register",StudentSchema)
module.exports = StudentModel