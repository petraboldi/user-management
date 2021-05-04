const express = require('express')
const router = express.Router({mergeParams: true})

const models = require('../models')
const Comment = models.Comment
const Bookmark = models.Bookmark

router.get('/new', async function (req, res) {
  const bookmark = await Bookmark.findOne({ where: { id: req.params.bookmarkId } })

  res.render('comments/new', { bookmark: bookmark })
})

router.post('/', async function (req, res) {
  await Comment.create({
    text: req.body.text,
    BookmarkId: req.params.bookmarkId
  })

  res.redirect('/bookmarks')
})

module.exports = router
