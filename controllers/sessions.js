const express = require('express')
const router = express.Router({mergeParams: true})
const bcrypt = require('bcryptjs');

const { User } = require('../models')

router.get('/new', async function (req, res) {
  res.render('sessions/new', { errors: [] })
})

router.post('/', async function (req, res) {
  const user = await User.findOne({ where: { email: req.body.email }})
  if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
    req.session.userId = user.id
    res.redirect('/bookmarks')
  } else {
    res.render('sessions/new', {errors: ["sorry, details not valid"]})
  }
})

router.delete('/', async function (req, res) {
  delete req.session.userId
  res.redirect('/')
})

module.exports = router
