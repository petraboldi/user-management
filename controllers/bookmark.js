const express = require('express')
const router = express.Router()

const Bookmark = require('../models').Bookmark

router.get('/', async function (req, res) {
  const bookmarks = await Bookmark.findAll()
  res.render("bookmarks/index", { bookmarks: bookmarks })
})

router.get('/:bookmarkId', async function (req, res) {
  console.log('in here')
  const bookmark = await Bookmark.findOne({where: { id: req.params.bookmarkId } })
  res.render("bookmarks/show", { bookmark: bookmark })
})

router.get('/:bookmarkId/edit', async function (req, res) {
  console.log('in here')
  const bookmark = await Bookmark.findOne({where: { id: req.params.bookmarkId } })
  res.render("bookmarks/edit", { bookmark: bookmark })
})

router.post('/', async function (req, res) {
  await Bookmark.create({url: req.body.url})
  const bookmarks = await Bookmark.findAll()
  res.render("bookmarks/index", { bookmarks: bookmarks })
})

router.delete('/:bookmarkId', async function (req, res) {
  await Bookmark.destroy({where: { id: req.params.bookmarkId } })
  const bookmarks = await Bookmark.findAll()
  res.render("bookmarks/index", { bookmarks: bookmarks })
})

router.put('/:bookmarkId', async function (req, res) {
  await Bookmark.update({url: req.body.url}, {where: { id: req.params.bookmarkId } })
  const bookmarks = await Bookmark.findAll()
  res.render("bookmarks/index", { bookmarks: bookmarks })
})

module.exports = router
