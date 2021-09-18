const mongoose = require ('mongoose')

//1- create mongodb schema 
const scoreSchmea = new mongoose.Schema({
    name : {type:String , required: true },
    score : {type:Number , required: true}
})

//2- export module 
module.exports = mongoose.model('ScoreSchema', scoreSchmea)