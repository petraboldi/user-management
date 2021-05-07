const express = require('express')
const router = express.Router({mergeParams: true})
const bcrypt = require('bcryptjs');
const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

const { User } = require('../models')

router.get('/new', async function (req, res) {
  res.render('sessions/new', { errors: [] })
})

passport.use(new LocalStrategy({
    usernameField: 'email'
},
  async function(username, password, done) {
    await User.findOne({ where: { email:username }}, function(err, user) {
      if (err) { return done(err); }
      if (!username) {
        return done(null, false, { message: 'Incorrect email.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

<!-- // router.post('/', async function (req, res) {
// const user = await User.findOne({ where: { email: req.body.email }})
// if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
// req.session.userId = user.id
// res.redirect('/bookmarks')
// } else {
// res.render('sessions/new', {errors: ["sorry, details not valid"]})
// }
// })
  -->

router.post('/',
  passport.authenticate('local', { successRedirect: '/bookmarks',
                                   failureRedirect: '/sessions/new',
                                   failureFlash: true })

 );

router.delete('/', async function (req, res) {
  delete req.session.userId
  res.redirect('/')
})

module.exports = router
