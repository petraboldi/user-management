const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');



const User = require('../models').User

router.get('/', (req, res)=>{
    res.render('./registrations/index')
})
router.get('/registrations/new', (req, res)=>{
    res.render('./registrations/new')
})

router.post('/registrations', async (req, res)=>{
 
    let password = req.body.password
    password = bcrypt.genSaltSync(10);
    const hashPassword  =  bcrypt.hashSync("B4c0/\/", password)
 
    await User.create({email: req.body.email,
    passwordHash:hashPassword }).catch((err)=>{res.render('./registrations/error')})
   res.redirect('./bookmarks')
})

module.exports = router;