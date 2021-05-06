const express = require('express')
const router = express.Router()

router.get('/new', (res, req)=>{
    res.render('/registrations/new')
})
router.post('/new', (res, req)=>{

    // res.render('/registrations/new')
})


module.exports = router;