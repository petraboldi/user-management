const express = require('express')
const router = express.Router()

const { Comment, Bookmark, Tag, BookmarkTag } = require('../models')

router.get('/', async function (req, res) {
  const bookmarks = await Bookmark.findAll({ include: { all: true }})
  res.render("bookmarks/index", { bookmarks: bookmarks })
})

router.get('/:bookmarkId/edit', async function (req, res) {
  const bookmark = await Bookmark.findOne({ where: { id: req.params.bookmarkId } })
  res.render("bookmarks/edit", { bookmark: bookmark })
})

router.post('/', async function (req, res) {
  const tagNames = req.body.tags.split(" ")

  const tags = await Promise.all(tagNames.map(tagName => Tag.findOrCreate({where: { name: tagName }})))
  const bookmark = await Bookmark.create({ url: req.body.url })
  tags.forEach(tag => tag[0].addBookmark(bookmark))

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
