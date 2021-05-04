const db = require('./models')

const createBookmarksWithTags = async () => {
  console.log('creating bookmarks with tags')
  const bookmark = await db.Bookmark.create({ url: 'www.bbc.co.uk' })
  const bookmark2 = await db.Bookmark.create({ url: 'www.google.co.uk' })
  const tag1 = await db.Tag.create({ name: 'news'})
  const tag2 = await db.Tag.create({ name: 'useful'})
  bookmark.addTag(tag1)
  bookmark.addTag(tag2)
  bookmark2.addTag(tag2)
}

module.exports = createBookmarksWithTags
