const express = require('express')
const app = express()
const port = 3000
const methodOverride = require('method-override')

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.set('view engine', 'ejs')

const bookmarkController = require('./controllers/bookmark.js')

app.use('/bookmarks', bookmarkController)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
