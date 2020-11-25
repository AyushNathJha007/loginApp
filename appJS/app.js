 const express = require('express')
 const app = express()
 const mongoClient=require('mongodb').MongoClient

 const url="mongodb://localhost:27017"


app.use(express.json())

app.listen(3000, ()=>{

    console.log("Listening to port..3000...")
})