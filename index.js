const express = require('express')
const mong = require ('mongoose')
const app = express();
const route = require('./routes/scoreAPI')
const cors = require('cors')

const url = 'mongodb+srv://user:12345@cluster0.y8olw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

// declaring the port number (can be any number)


//allow cors 
app.use(cors())

//  used monoogse connect function to conned to atlas db
mong.connect(url)
.then(function () {
    console.log("successfully connected to a database")
})
.catch(function (error) {
    console.log(error)
})


//3- use API from index point 
app.use(express.json())
app.use('/api',route)


const port = 4000;

//starting the server at the port of your choice 
app.listen(process.env.PORT || port, () => {
    console.log("app is listening at port 400")
   
})