const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
const  validator = require('validator');

// validator.isEmail('foo@bar.com'); //=> true

const User = require('../models').User

router.get('/', (req, res)=>{
    res.render('./registrations/index')
})
router.get('/registrations/new', (req, res)=>{
    res.render('./registrations/new')
})

router.post('/registrations', async (req, res)=>{
    const email = req.body.email
    validator.isEmail(email)
    
    let password = req.body.password
    password = bcrypt.genSaltSync(10);
    const hashPassword  =  bcrypt.hashSync("B4c0/\/", password)
 
    await User.create({email: req.body.email,
    passwordHash:hashPassword })
   res.redirect('./bookmarks')
})


module.exports = router;