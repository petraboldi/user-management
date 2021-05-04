const express = require('express')
const router = express.Router({mergeParams: true})

const { Comment, Bookmark, Tag } = require('../models')

router.get('/:name', async function (req, res) {
  const bookmarks = await Bookmark.findAll({
    include: [{
      model: Tag,
      where: {
        name: req.params.name
      }
    }]
  })

  res.render('tags/index', { bookmarks: bookmarks })
})

module.exports = router
