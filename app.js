const express = require('express')
const app = express()
const port = 3000
const methodOverride = require('method-override')

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.set('view engine', 'ejs')

const bookmarksController = require('./controllers/bookmarks.js')
const commentsController = require('./controllers/comments.js')
const tagsController = require('./controllers/tags.js')
const registrationController = require('./controllers/registrations.js')

app.use('/bookmarks', bookmarksController)
app.use('/bookmarks/:bookmarkId/comments', commentsController)
app.use('/tags', tagsController)
app.use('/', registrationController)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
