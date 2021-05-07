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
    const hashPassword  = bcrypt.hashSync(req.body.password, 10);
 
    await User.create({email: req.body.email,
    passwordHash:hashPassword }).catch((err)=>{res.render('./registrations/new')})
    const user = await User.findOne({ where: { email: req.body.email }})
    req.session.userId = user.id
    res.redirect('./bookmarks')
})

module.exports = router;