const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const StudentModel = require('./Students')



const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/register")

app.post('/login',(req,res)=>{
   const {email,password} = req.body;
   StudentModel.findOne({email: email})
   .then(user => {
    if(user){
        if(user.password === password){
            res.json("Success")
        }else {
            res.json("The password is incorrect")
        }
    }else{
        res.json("No record existed")
    }
   })
})

app.post('/Student',(req,res)=>{
    StudentModel.create(req.body)
    .then(register => res.json(register))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server is running")
})