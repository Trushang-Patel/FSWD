const express = require('express')
const main = require('./Email.js');
const mongoose = require('mongoose');
const app = express()
const port=3000
app.use(express.static('public'))
app.use(express.json())
//app.use(express.static('public'))
const UserModel = require('./models/Users')
mongoose.connect('mongodb://localhost:27017/mydb')
.then(()=>{console.log("Database connected successfully!");})
.catch((err)=>{console.log("Databas e does not connected!");})

app.get('/addStatic',(req,res)=>
{
   var mydata =
   {
      User_name:'Trushang',
      User_gender:'Male'
   }

   UserModel.create(mydata)
   .then(()=>{console.log("Record added")})
   .catch((err)=>{console.log("NO record Inserted"+err)})
   res.send("record added")

})

app.post('/api/add',(req,res)=>
{
   console.log(req.body)
   var mydata = req.body;
   UserModel.create(mydata)
   .then(()=>{console.log("Record Added")})
   .catch((err)=>{console.log("Record not inserted"+err)})
   res.send(JSON.stringify("RECord added"))
})

app.post('/register',(req,res)=>{
      console.log(req.body);
      UserModel.find()
      .then(data=>res.json(data))
      .catch(err=>console.log(err))
})
app.get('/',(req,res)=>{
    res.send('Hello World!')
})
 app.get('/home',(req,res)=>
 {
    res.send(__dirname+'/home.html')
 })

 app.get('/display',(req,res)=>
 {
   UserModel.find()
   .then(data=>res.json(data))
   .catch(err=>console.log(err))
 });
 
 main();

 app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
 });