const express = require('express')
const app = express()
const port = 3000
const methodOverride = require('method-override')
const session = require('express-session')
require('dotenv').config();

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.set('view engine', 'ejs')

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: false,
  cookie: { secure: false}

}))

const { User } = require('./models')

app.use(async (req, res, next) => {
  if (req.session.userId) {
    res.locals.currentUser = await User.findOne({where: { id: req.session.userId }})
  } else {
    res.locals.currentUser = undefined
  }
  res.locals.errors = []
  next()
})
const authenticator = (req, res, next) => {
  if (req.session.userId === undefined) { res.redirect('/') }
  next()
}



const bookmarksController = require('./controllers/bookmarks.js')
const commentsController = require('./controllers/comments.js')
const tagsController = require('./controllers/tags.js')
const registrationController = require('./controllers/registrations.js')
const sessionsController = require('./controllers/sessions.js')



app.use('/sessions', sessionsController)
app.use('/',registrationController)
app.use('/bookmarks',authenticator, bookmarksController)
app.use('/bookmarks/:bookmarkId/comments',authenticator,commentsController)
app.use('/tags', authenticator, tagsController)




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
