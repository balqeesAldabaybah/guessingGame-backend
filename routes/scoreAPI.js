const scoreSchmea = require ('../modules/score')
const express = require ('express')

const router = express.Router()

// Read
router.get('/score', async (req,res)=>{
    const rs = await scoreSchmea.find()
    return res.send(rs)
})

// Create, write
router.post('/score', async (req,res)=>{
    //console.log(req.body)
    const rs = await scoreSchmea.create(req.body)
    return res.send(rs)
})

module.exports = router