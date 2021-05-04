const express = require('express')
const router = express.Router()

const models = require('../models')
const Comment = models.Comment
const Bookmark = models.Bookmark
const Tag = models.Tag

router.get('/', async function (req, res) {
  const bookmarks = await Bookmark.findAll({include: Comment})
  res.render("bookmarks/index", { bookmarks: bookmarks })
})

router.get('/:bookmarkId/edit', async function (req, res) {
  const bookmark = await Bookmark.findOne({ where: { id: req.params.bookmarkId } })
  res.render("bookmarks/edit", { bookmark: bookmark })
})

router.post('/', async function (req, res) {
  const bookmark = await Bookmark.create({ url: req.body.url })
  res.redirect('/bookmarks')
})

router.delete('/:bookmarkId', async function (req, res) {
  await Bookmark.destroy({where: { id: req.params.bookmarkId } })

  res.redirect('/bookmarks')
})

router.put('/:bookmarkId', async function (req, res) {
  await Bookmark.update({url: req.body.url}, { where: { id: req.params.bookmarkId } })

  res.redirect('/bookmarks')
})

module.exports = router
